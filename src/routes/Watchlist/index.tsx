import React, { useCallback, useEffect, useMemo } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import routes from '..';
import testIds from './testIds';
import Header from './Header';
import locales from '../../locales/whitelist';
import { layoutStyles, textStyles } from './styles';
import AssetsList from '../../components/AssetsList';
import { Asset } from '../../store/slices/assets/types';
import useAppDispatch from '../../store/hooks/useAppDispatch';
import { unwatchAsset, updateAssetsMarketData } from '../../store/slices/assets/assets';
import { useWhitelist } from '../../store/slices/assets/hooks';

const Watchlist = () => {
  const { navigate } = useNavigation();
  const appDispatch = useAppDispatch();

  const [assets, refreshingAssets] = useWhitelist();

  const onAssetPress = useCallback((asset: Asset) => {
    Alert.alert(locales.unwatchTitle, locales.unwatchMsg, [
      {
        text: locales.cancel,
        style: 'cancel',
      },
      {
        text: locales.unwatch,
        onPress: () => {
          appDispatch(unwatchAsset(asset));
        },
        style: 'destructive',
      },
    ]);
  }, []);

  const onAddAssetPress = useCallback(() => {
    navigate(routes.ADD_ASSET);
  }, []);

  const onPullToRefresh = useCallback(() => {
    appDispatch(updateAssetsMarketData());
  }, []);

  useEffect(() => {
    appDispatch(updateAssetsMarketData());
  }, [assets.length]);

  const ListFooter = useMemo(
    () => (
      <View style={layoutStyles.addAssetCTAContainer}>
        <TouchableOpacity onPress={onAddAssetPress} testID={testIds.ADD_ASSET_CTA}>
          <Text style={textStyles.addAssetCTA}>{locales.addAssetCTA}</Text>
        </TouchableOpacity>
      </View>
    ),
    [onAddAssetPress]
  );

  const ListEmpty = useMemo(
    () => (
      <View style={layoutStyles.emptyListContainer}>
        <Text style={textStyles.emptyList}>{locales.emptyList}</Text>
      </View>
    ),
    []
  );

  return (
    <SafeAreaView style={layoutStyles.container} testID={testIds.MAIN_CONTAINER} edges={['bottom']}>
      <Header title={locales.headerTitle} />
      <AssetsList
        assets={assets}
        onAssetPress={onAssetPress}
        onPullToRefresh={onPullToRefresh}
        isRefreshing={refreshingAssets}
        ListFooter={ListFooter}
        ListEmpty={ListEmpty}
      />
    </SafeAreaView>
  );
};

export default Watchlist;
