import { Asset } from '../../../../store/slices/assets/types';
import { asset as mockedAsset } from '../../mockedData';
import { mapToAsset } from '../../transformers';

describe('mapToAsset', () => {
  test('Return schema', () => {
    const asset = mapToAsset(mockedAsset);
    const expected: Asset = {
      id: asset.id,
      name: asset.name,
      symbol: asset.symbol,
      image: asset.image,
    };

    expect(asset).toStrictEqual(expected);
  });
});
