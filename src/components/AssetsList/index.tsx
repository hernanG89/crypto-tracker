import React, { useCallback, useMemo } from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl as RefreshControlComponent,
  View,
} from 'react-native';

import { Asset } from '../../store/slices/assets/types';
import { layoutStyles } from './styles';
import AssetItem from '../AssetItem';
import testIds from './testIds';
import colors from '../../styles/colors';

const Constants = {
  flatlist: { maxToRenderPerBatch: 7, windowsSize: 3 },
};

type AssetsListProps = {
  assets: Asset[];
  onAssetPress?: (asset: Asset) => void;
  onPullToRefresh?: () => void;
  isRefreshing?: boolean;
  ListFooter?: JSX.Element;
  ListEmpty?: JSX.Element;
};

const Separator = () => <View style={layoutStyles.separator} />;

const AssetsList = ({
  assets,
  onAssetPress,
  onPullToRefresh,
  isRefreshing,
  ListFooter,
  ListEmpty,
}: AssetsListProps) => {
  const renderItem: ListRenderItem<Asset> = useCallback(
    ({ item }) => {
      return <AssetItem item={item} onItemPress={onAssetPress} />;
    },
    [onAssetPress]
  );

  const RefreshControl = useMemo(
    () => (
      <RefreshControlComponent
        onRefresh={onPullToRefresh}
        colors={[colors.blueNavy]}
        refreshing={!!isRefreshing}
      />
    ),
    [onPullToRefresh, isRefreshing]
  );

  return (
    <FlatList
      testID={testIds.ASSETS_LIST_CONTAINER}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
      data={assets}
      style={layoutStyles.container}
      contentContainerStyle={layoutStyles.contentContainer}
      ListFooterComponent={ListFooter}
      ListEmptyComponent={ListEmpty}
      refreshControl={RefreshControl}
      maxToRenderPerBatch={Constants.flatlist.maxToRenderPerBatch}
      windowSize={Constants.flatlist.windowsSize}
    />
  );
};

export default AssetsList;
