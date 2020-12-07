import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Video } from 'expo-av';

import { container, text } from '../styles';


export default function About({ navigation } : Record<string, any>)
{
  const openMvdb = () => {
    WebBrowser.openBrowserAsync('https://www.themoviedb.org/');
  };
  
  const openGitHub = () => {
    WebBrowser.openBrowserAsync('https://github.com/mbougarne/movies-reviews');
  };


  return (
    <View style={[container.container, container.dark, styles.innerContainer]}>
      <Text style={text.white}>
        React Native app for Movies and TV Shows with their details, it's made with:
      </Text>
      <View style={styles.btnContainer}>
        <Pressable 
          style={styles.btn}
          onPress={openMvdb}>
          <Text style={styles.btnText}>The Movie DB </Text>
        </Pressable>
        <Pressable 
          style={styles.btn}
          onPress={openGitHub}>
          <Text style={styles.btnText}>GitHub</Text>
        </Pressable>
      </View>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'http://staging.mbougarne.me/2020-12-05_21-41-58.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 320, height: 280 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 10,
  },
  btnContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 5,
    minWidth: 120,
    backgroundColor: '#ea1c2d',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  videoContainer: {
    marginTop: 50,
    justifyContent: 'center'
  }
})