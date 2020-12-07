import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './navigation/Drawer';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
