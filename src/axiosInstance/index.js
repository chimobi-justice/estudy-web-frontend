import axios from 'axios';

import { baseURL } from './constants';

const config = {
  baseURL: baseURL,
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';

      return Promise.reject();
    }

    return Promise.reject(error);
  }
);