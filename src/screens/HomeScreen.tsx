import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export type RootStackParamList = {
  MovieScreen: {id: string};
};

export const HomeScreen = () => {
  useEffect(() => {
    getData('/now_playing');
  }, []);

  const getData = async (url: string) => {
    const {data} = await movieDB.get<MovieDBNowPlaying>(url);

    console.log(data);
  };
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
