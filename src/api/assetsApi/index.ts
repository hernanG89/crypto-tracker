import { AxiosRequestConfig } from 'axios';

import api from '../index';

const getAllAssets = (config?: AxiosRequestConfig) =>
  api.get('/v2/assets?fields=id,name,slug,symbol', config);

const getAssetMarketData = (symbol: string, config?: AxiosRequestConfig) =>
  api.get(`/v1/assets/${symbol}/metrics/market-data`, {
    ...config,
  });

export default { getAllAssets, getAssetMarketData };
