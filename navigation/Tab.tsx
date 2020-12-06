import React from 'react';
import { Ionicons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';

const Tap = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tap.Navigator
      screenOptions = { ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = (route.name === 'Home') ? 'ios-home' : 'ios-list';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ea1c2d',
        inactiveTintColor: '#222',
      }}
    >
      <Tap.Screen 
        name="Home"
        component={HomeScreen}
      />
      <Tap.Screen 
        name="About"
        component={AboutScreen}
      />
    </Tap.Navigator>
  );
}
