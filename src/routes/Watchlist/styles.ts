import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import layouts from '../../styles/layouts';

export const layoutStyles = StyleSheet.create({
  container: { ...layouts.container, backgroundColor: colors.white },
  addAssetCTAContainer: { ...layouts.container, justifyContent: 'center', alignItems: 'center' },
});

export const textStyles = StyleSheet.create({
  addAssetCTA: { color: colors.blueNavy },
});
