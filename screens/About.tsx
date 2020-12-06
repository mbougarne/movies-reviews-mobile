import React from 'react';
import { View, Text, Button } from 'react-native';
import { container, text } from '../styles';

export default function About(props: any)
{
  return (
    <View style={[container.safe, container.container, container.dark]}>
      <Text style={[text.headline, text.primary]}>
        About Scree
      </Text>
      <Text style={[text.white]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus libero officia ullam odio vitae, cum ab tempora aspernatur nam quis adipisci doloribus reprehenderit aperiam quidem saepe id expedita, temporibus dolores!
      </Text>
      <Button 
        title="Home"
        onPress={() => props.navigation.navigate('Home')}
        color="#ea1c2d"
      />
    </View>
  )
}