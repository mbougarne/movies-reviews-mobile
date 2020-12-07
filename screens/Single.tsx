import React from 'react';
import { View, Text } from 'react-native';
import Movie from '../components/Movie';
import Show from '../components/Show';

import { container } from '../styles';

export default function About({ navigation, route } : Record<string, any>)
{

  let { item, type } = route.params

  const RenderItem = () => (type === 'movie') ? <Movie movie={item} /> : <Show show={item} />

  return (
    <View style={[container.container, container.safe, container.dark]}>
      <RenderItem />
    </View>
  )
}
