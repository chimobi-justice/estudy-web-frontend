import axios from 'axios';

import { baseURL } from './constants';

const config = { baseURL: baseURL };

export const axiosInstance = axios.create(config);
