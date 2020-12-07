import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { container } from '../styles';

import { useDispatch, useSelector } from 'react-redux';
import { popularMovies } from '../store/actions';
import StateScheme from '../types/State';

import Poster from '../components/Poster';

export default function PopularMovies({ navigation } : Record<string, any>)
{

  let movies = useSelector((state: StateScheme) => state.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularMovies());
  }, [])

  const renderItem = ({ item } : Record<string, any>) => (
    <Poster item={item} popular={true} />
  );

  return (
    <View style={[container.container, container.dark]}>
      <View style={styles.innerContainer}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          initialNumToRender={3}
          keyExtractor={item => item.id.toString()}
        />
      </View>
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
    alignItems: 'center'
  },
  listPadding: {
    paddingBottom: 20
  }
})