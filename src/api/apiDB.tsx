import axios from 'axios';

const apiDB = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

apiDB.interceptors.request.use(request => {
  console.log('Starting Request API DB', request);
  return request;
});

apiDB.interceptors.response.use(response => {
  console.log('Response API DB:', response);
  return response;
});

export default apiDB;
