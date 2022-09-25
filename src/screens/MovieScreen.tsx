import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'MovieScreen'> {}

export const MovieScreen = ({route}: Props) => {
  const movie = route.params;

  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
};
