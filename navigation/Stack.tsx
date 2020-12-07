import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import SingleScreen from '../screens/Single';
import AboutScreen from '../screens/About';
import PopularMoviesScreen from '../screens/PopularMovies';
import PopularShowsScreen from '../screens/PopularShows';
import Header from '../components/Header';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => <Header title="Home" navigation={navigation} />
        }}
      />
      <Stack.Screen 
        name="Single"
        component={SingleScreen}
        options={{
          header: ({ navigation, scene } : Record<string, any>) => {
            return (
              <Header 
                title={(scene.route.params.type === 'movie') ? scene.route.params.item.title : scene.route.params.item.name} 
                navigation={navigation} />
            )
          }
        }}
      />
    </Stack.Navigator>
  );
}

export function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="About"
        component={AboutScreen}
        options={{
          header: ({ navigation }) => <Header title="About You.i TV" navigation={navigation} />
        }}
      />
    </Stack.Navigator>
  );
}

export function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PopularMovies"
        component={PopularMoviesScreen}
        options={{
          header: ({ navigation }) => <Header title="Popular Movies" navigation={navigation} />
        }}
      />
    </Stack.Navigator>
  );
}

export function ShowsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PopularShows"
        component={PopularShowsScreen}
        options={{
          header: ({ navigation }) => <Header title="Popular Shows" navigation={navigation} />
        }}
      />
    </Stack.Navigator>
  );
}
