import React from 'react';
import { View, Text, Button } from 'react-native';
import { container, text } from '../styles';

export default function PopularShows({ navigation } : Record<string, any>)
{
  return (
    <View style={[container.safe, container.container, container.dark]}>
      <Text style={[text.headline, text.primary]}>
        Popular Shows
      </Text>
      {/* <Button 
        title="About"
        onPress={() => navigation.navigate('About')}
        color="#ea1c2d"
      /> */}
    </View>
  )
}
