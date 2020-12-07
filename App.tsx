import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './navigation/Tab';
import Drawer from './navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      {/* <TabNavigator /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
