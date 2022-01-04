import { AxiosRequestConfig } from 'axios';

import api from '../index';

const getAllAssets = (config?: AxiosRequestConfig) =>
  api.get('/v3/coins/markets?vs_currency=usd&per_page=50', config);

const getAssets = (ids: string[] = [], config?: AxiosRequestConfig) =>
  api.get(`/v3/coins/markets?vs_currency=usd&ids=${ids.join()}`, {
    ...config,
  });

export default { getAllAssets, getAssets };
