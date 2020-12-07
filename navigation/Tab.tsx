import React from 'react';
import { Ionicons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack, AboutStack} from './Stack';

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
      initialRouteName="Home"
    >
      <Tap.Screen 
        name="Home"
        component={HomeStack}
      />
      <Tap.Screen 
        name="About"
        component={AboutStack}
      />
    </Tap.Navigator>
  );
}
