import axios from 'axios';
import { getServerSideToken } from './getServerSideToken';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_BASE_URL = process.env.NEXT_PUBLIC_URL;

// call node api with server
export const nodeAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

nodeAxios.interceptors.request.use(
  async (config) => {
    const token = await getServerSideToken();
    if (token) {
      config.headers.authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// calls next js api routes with server
export const api = axios.create({
  baseURL: NEXT_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getServerSideToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
