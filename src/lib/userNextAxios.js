import axios from 'axios';
import { getCookie } from 'cookies-next';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_URL;

// calls next js backend from client side
const userAxiosNext = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

userAxiosNext.interceptors.request.use(
  (config) => {
    const cookieToken = getCookie('token');
    if (cookieToken) {
      const token = JSON.parse(cookieToken);
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

export default userAxiosNext;
