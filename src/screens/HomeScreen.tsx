import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {moviesNowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="#e63f31" size={50} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={moviesNowPlaying[2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
