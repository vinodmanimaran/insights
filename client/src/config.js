import axios from 'axios';

export const axiosInstance = axios.create ({
  baseURL: 'https://blog-api-cvnk.onrender.com/api/',
});
