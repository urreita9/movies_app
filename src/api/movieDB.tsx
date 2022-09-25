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

movieDB.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

movieDB.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});

export default movieDB;
