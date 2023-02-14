import axios from 'axios';
import Cookies from 'js-cookie';
import { putAuth } from '@/services/auth';

export default function getAxiosInstance(accessToken: any, refreshToken: string) {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (typeof accessToken === 'undefined') {
        // eslint-disable-next-line no-param-reassign
        accessToken = await putAuth(refreshToken);
      }

      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        ...config.headers,
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retries) {
        const token = await putAuth(refreshToken);
        originalRequest._retries = true;
        originalRequest.headers.Authorization = `Bearer ${token}`;
        Cookies.set('accessToken', token);
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    },
  );
  return axiosInstance;
}
