import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export type RootStackParamList = {
  MovieScreen: {id: string};
};

export const HomeScreen = () => {
  const {moviesNowPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{moviesNowPlaying[0].title}</Text>
    </View>
  );
};
