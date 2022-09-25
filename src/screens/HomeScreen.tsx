import React from 'react';
import {ActivityIndicator, StyleSheet, View, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

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
      <View style={{height: 440}}>
        <Carousel
          data={moviesNowPlaying}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
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
