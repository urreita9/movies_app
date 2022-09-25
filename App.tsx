import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import apiDB from './src/api/apiDB';

const App = () => {
  useEffect(() => {
    apiDB
      .get('/posts')
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
