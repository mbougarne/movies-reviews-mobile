import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/Home';

import { container } from './styles';

export default function App() {
  return (
    <View style={[container.container, container.safe, container.dark]}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
