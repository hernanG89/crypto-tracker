import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export const layoutStyles = StyleSheet.create({
  container: { width: '100%' },
  contentContainer: { ...spacing.screenHorizontalPadding },
  separator: { borderWidth: StyleSheet.hairlineWidth, borderColor: colors.greyLight },
});
