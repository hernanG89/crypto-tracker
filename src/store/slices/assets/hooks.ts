import useAppSelector from '../../hooks/useAppSelector';

export const useAllAssets = () => useAppSelector((state) => state.assets.allAssets.data);

export const useWhitelistAssets = () => useAppSelector((state) => state.assets.watchlist.data);
