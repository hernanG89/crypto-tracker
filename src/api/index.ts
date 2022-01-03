import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

export const axiosParams = {
  baseURL: Config.API_URL,
  headers: {
    'x-messari-api-key': Config.API_KEY,
  },
};

const axiosInstance = axios.create(axiosParams);

export default {
  get: (url: string, config: AxiosRequestConfig = {}) => axiosInstance.get(url, config),
  post: <T extends {}>(url: string, body: T, config: AxiosRequestConfig = {}) =>
    axiosInstance.post<T>(url, body, config),
  put: <T extends {}>(url: string, body: T, config: AxiosRequestConfig = {}) =>
    axiosInstance.put<T>(url, body, config),
  patch: <T extends {}>(url: string, body: T, config: AxiosRequestConfig = {}) =>
    axiosInstance.patch<T>(url, body, config),
  delete: (url: string, config: AxiosRequestConfig = {}) => axiosInstance.delete(url, config),
};
