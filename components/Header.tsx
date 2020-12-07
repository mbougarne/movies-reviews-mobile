import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title } : Record<string, any>) => {

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="ios-menu"
        color="white"
        size={32}
      />
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.logo}
        source={require('../assets/icon.png')}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#191919',
    flexDirection: 'row',
    flexShrink: 3,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  logo: {
    width: 65,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Header;