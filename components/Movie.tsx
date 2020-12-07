import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { container, text } from '../styles'

import MVDB from '../configs';
import { ScrollView } from 'react-native-gesture-handler';

export default function Movie({ movie } : Record<string, any>)
{
  const posterLink = MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE + '/' + movie.poster_path;

  return (
    <ScrollView>
      <View style={container.container}>
        <Image
          style={styles.popularPoster}
          source={{
            uri: posterLink
          }}
        />
        <Text style={[text.headline, text.white, text.upper]}>
          {movie.title}
        </Text>
        <Text style={[styles.subHeadline, text.white, text.upper]}>
          {movie.tagline}
        </Text>
        <Text style={text.white}>
          {movie.overview}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subHeadline: {
    fontSize: 22
  },
  popularPoster: {
    margin: 5,
    padding: 5,
    width: 220,
    height: 300,
  }
})