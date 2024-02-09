import axios from 'axios';
import { baseURL } from './constants';

axios.defaults.baseURL = baseURL;

const config = {
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('uc');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('uc');
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
