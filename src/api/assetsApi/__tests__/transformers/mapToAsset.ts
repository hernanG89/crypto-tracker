import { Asset } from '../../../../store/slices/assets/types';
import { mapToAsset } from '../../transformers';
import { Asset as APIAsset } from '../../types';

const data: APIAsset = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  current_price: 46382,
  market_cap: 878598287447,
  market_cap_rank: 1,
  fully_diluted_valuation: 975228682094,
  total_volume: 21878272574,
  high_24h: 47568,
  low_24h: 45811,
  price_change_24h: -780.282924679334,
  price_change_percentage_24h: -1.65445,
  market_cap_change_24h: -13273550974.117432,
  market_cap_change_percentage_24h: -1.48828,
  circulating_supply: 18919218.0,
  total_supply: 21000000.0,
  max_supply: 21000000.0,
  ath: 69045,
  ath_change_percentage: -32.74007,
  ath_date: '2021-11-10T14:24:11.849Z',
  atl: 67.81,
  atl_change_percentage: 68385.68929,
  atl_date: '2013-07-06T00:00:00.000Z',
  roi: null,
  last_updated: '2022-01-04T00:50:15.415Z',
};

describe('mapToAsset', () => {
  test('Return schema', () => {
    const asset = mapToAsset(data);
    const expected: Asset = {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
    };

    expect(asset).toStrictEqual(expected);
  });
});
