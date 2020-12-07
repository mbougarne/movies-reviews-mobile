import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { container, text } from '../styles';

import { useDispatch, useSelector } from 'react-redux';
import { topRatedMovies, topRatedShows } from '../store/actions';
import StateScheme from '../types/State';

import Poster from '../components/Poster';

export default function Home({ navigation } : Record<string, any>)
{

  let { movies, shows } = useSelector((state: StateScheme) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topRatedMovies());
    dispatch(topRatedShows());
  }, [])

  const renderItem = ({ item } : Record<string, any>) => (
    <Poster movie={item} />
  );

  return (
    <View style={[container.container, container.dark]}>
      <View style={styles.wrapper}>
        <View style={styles.innerContainer}>
          <Text style={[text.headline, text.white, text.upper]}>
            Top Rated Movies
          </Text>
          <FlatList
            data={movies}
            renderItem={renderItem}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.innerContainer}>
          <Text style={[text.headline, text.white, text.upper]}>
            Top Rated Shows
          </Text>
          <FlatList
            data={shows}
            renderItem={renderItem}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 70,
  },
  innerContainer: {
    paddingTop: 25,
    paddingLeft: 10,
  }
})