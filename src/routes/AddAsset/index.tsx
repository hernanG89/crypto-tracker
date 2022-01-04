import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { filter, throttle, without } from 'lodash';

import { layoutStyles, textStyles } from './styles';
import testIds from './testIds';
import locales from '../../locales/addAssets';
import AssetsList from '../../components/AssetsList';
import { Asset } from '../../store/slices/assets/types';
import useAppDispatch from '../../store/hooks/useAppDispatch';
import { useAllAssets, useWatchlist } from '../../store/slices/assets/hooks';
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
  const [allAssets, pullingAssets] = useAllAssets();
  const [watchlistAssets] = useWatchlist();

  const assets = useMemo(
    () =>
      watchlistAssets.length === 0
        ? allAssets
        : filter(allAssets, (asset) => !watchlistAssets.find((wAsset) => wAsset.id === asset.id)),
    [allAssets, watchlistAssets]
  );

  const filteredAssets = useMemo(() => {
    const searchTermToUppercase = `${searchTerm}`.toUpperCase();

    return assets.filter(
      (asset) =>
        asset.id.includes(searchTermToUppercase) || asset.symbol.includes(searchTermToUppercase)
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
        onPullToRefresh={assets.length === 0 ? onPullToRefresh : undefined}
        isRefreshing={assets.length === 0 ? pullingAssets : false}
      />
    </View>
  );
};

export default AddAsset;
