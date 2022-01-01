import { AxiosRequestConfig } from 'axios';

import api from '../index';
import { mapGetAssetMarketData } from './transformers';

const getAllAssets = (config?: AxiosRequestConfig) =>
  api.get('v2/assets?fields=id,name,slug,symbol', config);

const getAssetMarketData = (symbol: string, config?: AxiosRequestConfig) =>
  api.get(`v1/asset/${symbol}/metrics/market-data`, {
    ...config,
    transformResponse: mapGetAssetMarketData,
  });

export default { getAllAssets, getAssetMarketData };
