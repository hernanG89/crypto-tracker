import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import routes from '..';
import { layoutStyles } from './styles';
import testIds from './testIds';

const Watchlist = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={layoutStyles.container} testID={testIds.MAIN_CONTAINER}>
      <Text>Watchlist</Text>
      <Button
        title={'Add currency'}
        onPress={() => {
          navigate(routes.ADD_ASSET);
        }}
      />
    </SafeAreaView>
  );
};

export default Watchlist;
