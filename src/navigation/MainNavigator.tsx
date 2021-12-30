import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import routes from '../routes';
import WatchList from '../routes/Watchlist';
import AddAsset from '../routes/AddAsset';

export type RootStackParamList = {
  [routes.WATCHLIST]: undefined;
  [routes.ADD_ASSET]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigatorOptions = {
  headerShown: false,
};

const screenOptions = {
  gestureEnabled: false,
};

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.WATCHLIST} screenOptions={navigatorOptions}>
        <Stack.Screen name={routes.WATCHLIST} component={WatchList} options={screenOptions} />
        <Stack.Screen name={routes.ADD_ASSET} component={AddAsset} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
