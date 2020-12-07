import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen} = createDrawerNavigator();

import MainScreen from './Tab';
import { MoviesStack, ShowsStack } from './Stack';

export default function Drawer() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={MainScreen} />
      <Screen name="PopularMovies" component={MoviesStack} />
      <Screen name="PopularShows" component={ShowsStack} />
    </Navigator>
  );
}