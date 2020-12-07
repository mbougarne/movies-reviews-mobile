import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { container } from '../styles';

import { useDispatch, useSelector } from 'react-redux';
import { topRatedMovies } from '../store/actions';
import StateScheme from '../types/State';

import Poster from '../components/Poster';

export default function Home({ navigation } : Record<string, any>)
{

  let { movies, shows } = useSelector((state: StateScheme) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topRatedMovies())
  })

  const renderItem = ({ item } : Record<string, any>) => (
    <Poster movie={item} />
  );

  return (
    <View style={[container.safe, container.container, container.dark]}>
      <View style={styles.innerContainer}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 45,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})