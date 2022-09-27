import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  const renderItem = ({item}: any) => (
    <MoviePoster movie={item} height={200} width={140} />
  );
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && <Text style={styles.subtitle}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#282c34',
  },
});
