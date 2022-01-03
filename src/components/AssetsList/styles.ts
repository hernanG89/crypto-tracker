import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import layouts from '../../styles/layouts';
import spacing from '../../styles/spacing';

export const layoutStyles = StyleSheet.create({
  container: { ...layouts.container },
  contentContainer: { ...spacing.screenHorizontalPadding },
  separator: { borderWidth: StyleSheet.hairlineWidth, borderColor: colors.greyLight },
});
