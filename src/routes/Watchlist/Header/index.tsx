import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import colors from '../../../styles/colors';
import testIds from '../testIds';
import { layoutStyles, textStyles } from './styles';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={layoutStyles.container} testID={testIds.HEADER_CONTAINER}>
      <StatusBar backgroundColor={colors.blueNavy} />
      <View style={layoutStyles.rowContainer}>
        <Text style={textStyles.title}>{title}</Text>
        <View style={layoutStyles.avatarContainer}>
          <Text style={textStyles.avatar}>HG</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
