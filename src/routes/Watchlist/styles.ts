import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import layouts from '../../styles/layouts';
import typhography from '../../styles/typhography';

export const layoutStyles = StyleSheet.create({
  container: { ...layouts.container, backgroundColor: colors.white },
  addAssetCTAContainer: {
    ...layouts.container,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  emptyListContainer: { justifyContent: 'center', alignItems: 'center', paddingVertical: 24 },
});

export const textStyles = StyleSheet.create({
  addAssetCTA: {
    ...typhography.interRegular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.blueNavy,
  },
  emptyList: {
    ...typhography.interRegular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyMedium,
  },
});
