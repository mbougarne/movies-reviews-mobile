import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import Header from '../components/Header';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Header title="Home" />
        }}
      />
    </Stack.Navigator>
  );
}

export function AboutStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="About"
        component={AboutScreen}
        options={{
          header: () => <Header title="About You.i TV" />
        }}
      />
    </Stack.Navigator>
  );
}
