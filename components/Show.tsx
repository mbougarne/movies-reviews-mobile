import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { container, text } from '../styles'

import MVDB from '../configs';

export default function Show({ show } : Record<string, any>)
{
  const posterLink = MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE + '/' + show.poster_path;

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
          {show.name}
        </Text>
        <Text style={text.white}>
          {show.overview}
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