import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { Asset } from '../../store/slices/assets/types';
import { layoutStyles } from './styles';
import AssetItem from '../AssetItem';
import testIds from './testIds';

type AssetsListProps = {
  assets: Asset[];
  onAssetPress?: (asset: Asset) => void;
  onPullToRefresh?: () => void;
  isRefreshing?: boolean;
  ListFooter?: JSX.Element;
};

const Separator = () => <View style={layoutStyles.separator} />;

const AssetsList = ({
  assets,
  onAssetPress,
  onPullToRefresh,
  isRefreshing,
  ListFooter,
}: AssetsListProps) => {
  const renderItem: ListRenderItem<Asset> = useCallback(
    ({ item }) => {
      return <AssetItem item={item} onItemPress={onAssetPress} />;
    },
    [onAssetPress]
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
      onRefresh={onPullToRefresh}
      refreshing={isRefreshing}
    />
  );
};

export default AssetsList;
