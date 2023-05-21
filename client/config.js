import axios from 'axios';

export const axiosInstance = axios.create ({
  baseURL: 'https://blog-api-0jfo.onrender.com/api/',
});
