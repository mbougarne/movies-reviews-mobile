import React from 'react';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'

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
        <VideoPlayer
          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: { uri: 'http://staging.mbougarne.me/2020-12-05_21-41-58.mp4' },
            useNativeControls: true
          }}
          inFullscreen={true}
          switchToLandscape={() => true}
          width={360}
          height={300}
          videoBackground="transparent"
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
  }
})