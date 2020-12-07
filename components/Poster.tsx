import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import MVDB from '../configs'

const Movie = ({ item, popular }: Record<string, any>) => {
  const posterLink = MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE + '/' + item.poster_path;
  return (
    <View>
      <Image
        style={(popular) ? styles.popularPoster : styles.poster}
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
    height: 275,
  },
  popularPoster: {
    margin: 5,
    padding: 5,
    width: 342,
    height: 517,
  }
})

export default Movie;