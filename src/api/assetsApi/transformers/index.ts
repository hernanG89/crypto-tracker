import { Asset } from '../../../store/slices/types';
import { Data as GetAssetMarketDataResponse } from '../types/getAssetMarketData';

export const mapGetAssetMarketData = ({
  data: { id, name, slug, symbol, market_data },
}: {
  data: GetAssetMarketDataResponse;
}): Asset => ({
  id,
  name,
  slug,
  symbol,
  marketData: {
    priceUSD: market_data.price_usd,
    percentageChangeLast24HoursUSD: market_data.percent_change_usd_last_24_hours,
  },
});
