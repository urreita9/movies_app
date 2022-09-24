import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {MovieScreen} from '../screens/MovieScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
    </Stack.Navigator>
  );
};
