import { Data } from '../types/getAssetMarketData';
import { Asset } from '../../../store/slices/assets/types';

export const mapGetAssetMarketData = ({ data }: { data: Data }): Asset => ({
  id: data.id,
  name: data.name,
  slug: data.slug,
  symbol: data.symbol,
  marketData: {
    priceUSD: data?.market_data.price_usd,
    percentageChangeLast24HoursUSD: data?.market_data.percent_change_usd_last_24_hours,
  },
});
