import axios from 'axios';
import {REACT_APP_BASE_URL, REACT_APP_BASE_URL_API_KEY} from '@env';

const movieDB = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 1000,
  params: {
    api_key: REACT_APP_BASE_URL_API_KEY,
    language: 'en-US',
  },
});

export default movieDB;
