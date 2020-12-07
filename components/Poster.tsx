import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import MVDB from '../configs'

const Movie = ({ movie }: Record<string, any>) => {
  const posterLink = MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE + '/' + movie.poster_path;
  return (
    <View>
      <Image
        style={styles.poster}
        source={{
          uri: posterLink
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  poster: {
    margin: 5,
    padding: 5,
    width: 180,
    height: 240,
  }
})

export default Movie;