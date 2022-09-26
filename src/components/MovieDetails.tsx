import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MovieDetails = () => {
  return (
    <View>
      <Text style={styles.description}>Hello Movie Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    opacity: 0.8,
    color: '#282c34',
  },
});
