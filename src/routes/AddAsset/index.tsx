import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { layoutStyles } from './styles';
import testIds from './testIds';

const AddAsset = () => {
  const { goBack } = useNavigation();
  return (
    <SafeAreaView style={layoutStyles.container} testID={testIds.MAIN_CONTAINER}>
      <Text>AddAsset</Text>
      <Button title={'Add currency'} onPress={() => goBack()} />
    </SafeAreaView>
  );
};

export default AddAsset;
