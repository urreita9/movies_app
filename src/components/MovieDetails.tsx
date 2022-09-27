import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Cast, MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  cast: Cast[];
  movieFull: MovieFull;
}
export const MovieDetails = ({cast, movieFull}: Props) => {
  const renderItem = ({item}) => <CastItem actor={item} />;
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" color="#282c34" size={16} />

          <Text style={styles.description}>{movieFull.vote_average}</Text>
          <Text style={styles.description}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text style={styles.summary}>Summary</Text>
        <Text style={styles.overview}>{movieFull.overview}</Text>

        <Text style={styles.summary}>Budget</Text>
        <Text style={styles.overview}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text style={{...styles.summary, marginTop: 10, marginHorizontal: 20}}>
          Cast
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    opacity: 0.8,
    color: '#282c34',
    marginLeft: 5,
  },
  summary: {
    fontSize: 20,
    opacity: 0.8,
    color: '#282c34',
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 16,
    opacity: 0.8,
    color: '#282c34',
  },
});
