import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackground} from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {getColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {setImageColors} = useContext(GradientContext);
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'white', secondary = 'white'] = await getColors(uri);
    setImageColors({primary, secondary});
  };
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="#e63f31" size={50} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={styles.bigCarousel}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCarousel: {
    height: 440,
  },
});
