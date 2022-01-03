import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import layouts from '../../styles/layouts';
import spacing from '../../styles/spacing';
import typhography from '../../styles/typhography';

export const layoutStyles = StyleSheet.create({
  container: {
    ...layouts.container,
    backgroundColor: colors.white,
  },
  headerContainer: {
    ...spacing.screenHorizontalPadding,
    paddingTop: 24,
  },
  inputContainer: {
    ...spacing.screenHorizontalPadding,
    paddingVertical: 24,
  },
  input: {
    padding: 8,
    borderRadius: 8,
    borderColor: colors.greyLight,
    borderWidth: 1,
    justifyContent: 'center',
  },
  listContainer: { backgroundColor: 'red', ...layouts.container },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  assetNotFoundContainer: { paddingVertical: 24, justifyContent: 'center', alignItems: 'center' },
});

export const textStyles = StyleSheet.create({
  backCTA: { ...typhography.interRegular, fontSize: 16, lineHeight: 24, color: colors.blueNavy },
  assetNotFound: { ...typhography.interRegular, fontSize: 16, color: colors.greyMedium },
});
