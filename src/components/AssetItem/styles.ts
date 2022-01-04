import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import layouts from '../../styles/layouts';
import typhography from '../../styles/typhography';

const Constants = {
  iconContainerWith: 48,
  percentageArrowWidth: 20,
};

export const layoutStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 24,
    alignItems: 'center',
  },
  imageContainer: {
    height: Constants.iconContainerWith,
    width: Constants.iconContainerWith,
    borderRadius: Constants.iconContainerWith / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  descriptorContainer: { ...layouts.container, marginLeft: 8 },
  marketDataContainer: { alignItems: 'flex-end' },
  percentageArrow: {
    width: Constants.percentageArrowWidth,
    height: Constants.percentageArrowWidth,
  },
  percentageVariationContainer: { flexDirection: 'row', justifyContent: 'flex-end' },
});

export const noImageContainer = {
  ...layoutStyles.imageContainer,
  backgroundColor: colors.greyLight,
};

export const textStyles = StyleSheet.create({
  icon: { ...typhography.interBold, color: colors.white },
  name: {
    ...typhography.interBold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyDark,
  },
  symbol: {
    ...typhography.interRegular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.greyMedium,
  },
  price: { ...typhography.interBold, fontSize: 16, lineHeight: 24, color: colors.greyDark },
  percentageVariation: {
    ...typhography.interRegular,
    fontSize: 14,
    lineHeight: 20,
  },
});
