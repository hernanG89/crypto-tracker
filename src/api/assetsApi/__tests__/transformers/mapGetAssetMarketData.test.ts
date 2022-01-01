import { mapGetAssetMarketData } from '../../transformers';
import { Asset } from '../../../../store/slices/types';
import { Data as GetAssetMarkedData } from '../../types/getAssetMarketData';

const data: GetAssetMarkedData = {
  id: '1e31218a-e44e-4285-820c-8282ee222035',
  symbol: 'BTC',
  name: 'Bitcoin',
  slug: 'bitcoin',
  contract_addresses: null,
  _internal_temp_agora_id: '9793eae6-f374-46b4-8764-c2d224429791',
  market_data: {
    price_usd: 48078.76410256141,
    price_btc: 1,
    price_eth: 12.707817807401854,
    volume_last_24_hours: 5613884779.503289,
    real_volume_last_24_hours: 4221127650.6571255,
    volume_last_24_hours_overstatement_multiple: 1.329949066721388,
    percent_change_usd_last_1_hour: -0.3747050018288124,
    percent_change_btc_last_1_hour: 0,
    percent_change_eth_last_1_hour: -0.14085108161399618,
    percent_change_usd_last_24_hours: 1.1623495236646126,
    percent_change_btc_last_24_hours: 0,
    percent_change_eth_last_24_hours: -0.030644012542413602,
    ohlcv_last_1_hour: {
      open: 48286.82814775498,
      high: 48463.664224988184,
      low: 47934.42721547563,
      close: 48078.89106422998,
      volume: 245240208.48308113,
    },
    ohlcv_last_24_hour: {
      open: 46771.294282187635,
      high: 48577.82283816687,
      low: 46691.725410502906,
      close: 48078.764102561414,
      volume: 4890911905.990292,
    },
    last_trade_at: '2021-12-31T11:07:36.837Z',
  },
};

const response = {
  status: {
    elapsed: 1,
    timestamp: '2021-12-31T11:07:37.313229753Z',
  },
  data,
};

describe('mapGetAssetMarketData', () => {
  test('Return schema', () => {
    const asset = mapGetAssetMarketData(response);
    const expected: Asset = {
      id: response.data.id,
      name: response.data.name,
      slug: response.data.slug,
      symbol: response.data.symbol,
      marketData: {
        priceUSD: response.data.market_data.price_usd,
        percentageChangeLast24HoursUSD: response.data.market_data.percent_change_usd_last_24_hours,
      },
    };

    expect(asset).toStrictEqual(expected);
  });
});
