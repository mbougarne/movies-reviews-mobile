import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
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
    <Poster item={item} />
  );

  return (
    <View style={[container.container, container.dark]}>
      <ScrollView style={styles.wrapper} nestedScrollEnabled={true}>
        <View style={styles.innerContainer}>
          <Text style={[text.headline, text.white, text.upper]}>
            Top Rated Movies
          </Text>
          <FlatList
            data={movies}
            renderItem={renderItem}
            horizontal={true}
            initialNumToRender={3}
            nestedScrollEnabled={true}
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
            nestedScrollEnabled={true}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 70,
    paddingBottom: 50,
  },
  innerContainer: {
    paddingTop: 25,
    paddingLeft: 10,
  },
  listPadding: {
    paddingBottom: 20
  }
})