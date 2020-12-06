import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen 
        name="About"
        component={AboutScreen}
        options={{
          title: 'About You.i TV'
        }}
      />
    </Stack.Navigator>
  );
}
