import axios from 'axios';
import { getCookie } from 'cookies-next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Calls node backend api from client.
const userAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

userAxios.interceptors.request.use(
  (config) => {
    const cookieToken = getCookie('token');
    if (cookieToken) {
      const token = cookieToken;
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default userAxios;
