import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { throttle } from 'lodash';

import { layoutStyles, textStyles } from './styles';
import testIds from './testIds';
import locales from '../../locales/addAssets';
import AssetsList from '../../components/AssetsList';
import { Asset } from '../../store/slices/assets/types';
import useAppDispatch from '../../store/hooks/useAppDispatch';
import { useAllAssets } from '../../store/slices/assets/hooks';
import { getAllAssets, watchAsset } from '../../store/slices/assets/assets';

const Constants = {
  textChangeThrottle: 100,
};

const AddAsset = () => {
  const { goBack } = useNavigation();

  const [searchTerm, setSearchTerm] = useState('');
  const onTextChange = useCallback(
    throttle((text) => {
      setSearchTerm(text);
    }, Constants.textChangeThrottle),
    []
  );
  const [assets, pullingAssets] = useAllAssets();

  const filteredAssets = useMemo(() => {
    const searchTermToUppercase = `${searchTerm}`.toUpperCase();
    const searchTermToLowerCase = `${searchTerm}`.toLowerCase();

    return assets.filter(
      (asset) =>
        asset.slug?.includes(searchTermToLowerCase) || asset.symbol?.includes(searchTermToUppercase)
    );
  }, [searchTerm, assets]);

  const appDispatch = useAppDispatch();

  const onAssetPress = useCallback((asset: Asset) => {
    Alert.alert(locales.watchTitle, locales.watchMsg, [
      {
        text: locales.cancel,
        style: 'cancel',
      },
      {
        text: locales.watch,
        onPress: () => {
          appDispatch(watchAsset(asset));
        },
        style: 'default',
      },
    ]);
  }, []);

  const onPullToRefresh = useCallback(() => {
    appDispatch(getAllAssets());
  }, []);

  useEffect(() => {
    if (!assets.length) {
      appDispatch(getAllAssets());
    }
  }, []);

  const ListEmpty = useMemo(() => {
    if (!assets.length && pullingAssets) {
      return (
        <View style={layoutStyles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
    if (searchTerm.length && filteredAssets.length === 0) {
      return (
        <View style={layoutStyles.assetNotFoundContainer}>
          <Text style={textStyles.assetNotFound}>{locales.assetNotFound}</Text>
        </View>
      );
    }

    return undefined;
  }, [assets, pullingAssets, searchTerm, filteredAssets]);

  return (
    <View style={layoutStyles.container} testID={testIds.MAIN_CONTAINER}>
      <View style={layoutStyles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <Text style={textStyles.backCTA}>{locales.backCTA}</Text>
        </TouchableOpacity>
      </View>
      <View style={layoutStyles.inputContainer}>
        <TextInput
          style={layoutStyles.input}
          value={searchTerm}
          onChangeText={onTextChange}
          underlineColorAndroid="transparent"
        />
      </View>
      <AssetsList
        assets={searchTerm?.length > 0 ? filteredAssets : assets}
        onAssetPress={onAssetPress}
        ListEmpty={ListEmpty}
        onPullToRefresh={onPullToRefresh}
        isRefreshing={assets.length > 0 ? pullingAssets : false}
      />
    </View>
  );
};

export default AddAsset;
