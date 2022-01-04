import React, { useCallback, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import images from '../../assets/images';
import { Asset } from '../../store/slices/assets/types';
import colors from '../../styles/colors';
import { formatTwoDecimal } from '../../utils/strings';
import { layoutStyles, noImageContainer, textStyles } from './styles';
import testIds from './testIds';

type AssetItemProps = {
  item: Asset;
  onItemPress?: (asset: Asset) => void;
};

const AssetItem = ({ item, onItemPress }: AssetItemProps) => {
  const isPositive = item?.marketData && item.marketData.percentageChangeLast24Hours > 0;
  const percentageVariationColor = isPositive ? colors.greenSuccess : colors.redDanger;

  const onPress = useCallback(() => {
    if (onItemPress) {
      onItemPress(item);
    }
  }, [item, onItemPress]);

  const imageSrouce = useMemo(() => (item.image ? { uri: item.image } : undefined), []);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      testID={`${testIds.ASSET_ITEM_ON_PRESS_}${item.id}`}
    >
      <View style={layoutStyles.container} testID={`${testIds.ASSET_ITEM_CONTAINER_}${item.id}`}>
        {imageSrouce ? (
          <Image source={imageSrouce} style={layoutStyles.imageContainer} />
        ) : (
          <View style={noImageContainer}>
            <Text style={textStyles.icon}>{item.symbol}</Text>
          </View>
        )}

        <View style={layoutStyles.descriptorContainer}>
          <Text style={textStyles.name}>{item.name}</Text>
          <Text style={textStyles.symbol}>{item.symbol}</Text>
        </View>
        {item?.marketData && (
          <View
            style={layoutStyles.marketDataContainer}
            testID={`${testIds.ASSET_ITEM_MARKET_DATA_CONTAINER_}${item.id}`}
          >
            <Text style={textStyles.price}>$ {formatTwoDecimal(item.marketData.price)}</Text>
            <View style={layoutStyles.percentageVariationContainer}>
              <Image
                testID={`${testIds.ASSET_ITEM_MARKET_DATA_PERCENTAGE_VARIATION_ICON_}${item.id}`}
                style={[layoutStyles.percentageArrow, { tintColor: percentageVariationColor }]}
                source={isPositive ? images.northEastArrow : images.southWestArrow}
              />
              <Text
                style={[textStyles.percentageVariation, { color: percentageVariationColor }]}
                testID={`${testIds.ASSET_ITEM_MARKET_DATA_PERCENTAGE_VARIATION_TEXT_}${item.id}`}
              >
                {formatTwoDecimal(item.marketData?.percentageChangeLast24Hours)}%
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AssetItem;
