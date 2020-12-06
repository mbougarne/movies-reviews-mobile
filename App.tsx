import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigation/Stack';
import TabNavigator from './navigation/Tab';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
