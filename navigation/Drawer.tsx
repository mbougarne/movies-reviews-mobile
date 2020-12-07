import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen} = createDrawerNavigator();

import MainScreen from './Tab';
import { MoviesStack, ShowsStack } from './Stack';

export default function Drawer() {
  return (
    <Navigator 
      initialRouteName="Home"
      drawerStyle={{ backgroundColor: '#222' }}
      drawerContentOptions={{
        activeBackgroundColor: '#ea1c2d',
        activeTintColor: '#fff',
        labelStyle: {
          color: '#fff'
        }
      }}>
      <Screen name="Home" component={MainScreen} />
      <Screen name="PopularMovies" component={MoviesStack} />
      <Screen name="PopularShows" component={ShowsStack} />
    </Navigator>
  );
}