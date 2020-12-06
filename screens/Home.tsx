import React from 'react';
import { View, Text } from 'react-native';
import { container, text } from '../styles';

export default function Home()
{
  return (
    <View style={container.dark}>
      <Text style={[text.headline, text.primary]}>Home Scree</Text>
    </View>
  )
}
