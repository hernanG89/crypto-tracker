import { Asset as APIAsset } from '../types';

import { Asset } from '../../../store/slices/assets/types';

export const mapToAsset = (asset: APIAsset): Asset => ({
  id: asset.id,
  name: asset.name,
  symbol: asset.symbol,
  image: asset.image,
});

export const mapToAssetWithMarketData = (asset: APIAsset): Asset => ({
  ...mapToAsset(asset),
  marketData: {
    price: asset.current_price,
    percentageChangeLast24Hours: asset.price_change_percentage_24h,
  },
});
