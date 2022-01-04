import { Asset } from '../../../../store/slices/assets/types';
import { asset as mockedAsset } from '../../mockedData';
import { mapToAssetWithMarketData } from '../../transformers';
import { Asset as APIAsset } from '../../types';

describe('mapToAssetWithMarketData', () => {
  test('Return schema', () => {
    const asset = mapToAssetWithMarketData(mockedAsset);
    const expected: Asset = {
      id: mockedAsset.id,
      name: mockedAsset.name,
      symbol: mockedAsset.symbol,
      image: mockedAsset.image,
      marketData: {
        price: mockedAsset.current_price,
        percentageChangeLast24Hours: mockedAsset.price_change_percentage_24h,
      },
    };

    expect(asset).toStrictEqual(expected);
  });
});
