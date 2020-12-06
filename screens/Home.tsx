import React from 'react';
import { View, Text, Button } from 'react-native';
import { container, text } from '../styles';

export default function Home(props: any)
{
  return (
    <View style={[container.safe, container.container, container.dark]}>
      <Text style={[text.headline, text.primary]}>
        Home Scree
      </Text>
      <Button 
        title="About"
        onPress={() => props.navigation.navigate('About us')}
        color="#ea1c2d"
      />
    </View>
  )
}
