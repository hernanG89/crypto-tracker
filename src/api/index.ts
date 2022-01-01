import axios, { AxiosRequestConfig } from 'axios';

export const axiosParams = {
  baseURL: 'https://data.messari.io/api/',
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
