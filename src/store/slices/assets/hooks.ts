import useAppSelector from '../../hooks/useAppSelector';
import { Asset } from './types';

export const useAllAssets = (): [Asset[], boolean] => [
  useAppSelector((state) => state.assets.allAssets.data),
  useAppSelector((state) => state.assets.allAssets.loading),
];

export const useWhitelist = (): [Asset[], boolean] => [
  useAppSelector((state) => state.assets.watchlist.data),
  useAppSelector((state) => state.assets.watchlist.loading),
];
