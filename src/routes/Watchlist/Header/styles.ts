import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import layouts from '../../../styles/layouts';
import spacing from '../../../styles/spacing';
import typhography from '../../../styles/typhography';

const Constants = {
  headerHeight: 100,
  avatarWidth: 48,
};

export const layoutStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: Constants.headerHeight,
    backgroundColor: colors.blueNavy,
    justifyContent: 'center',
    ...spacing.screenHorizontalPadding,
  },
  rowContainer: {
    ...layouts.horizontalContainer,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    width: Constants.avatarWidth,
    height: Constants.avatarWidth,
    borderRadius: Constants.avatarWidth / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const textStyles = StyleSheet.create({
  title: { ...typhography.interBold, fontSize: 24, lineHeight: 30, color: colors.white },
  avatar: { ...typhography.interBold, fontSize: 12, color: colors.white },
});
