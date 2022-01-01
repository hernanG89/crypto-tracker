import assets, { initialState, watchAsset, unwatchAsset } from '../assets';

const asset = { id: '1', name: 'Bitcoin', slug: 'bitcoin', symbol: 'BTC' };

describe('Assets', () => {
  test('Should return the initial state', () => {
    expect(assets(undefined, { type: '' })).toEqual(initialState);
  });

  test('The asset should be added to watchlist', () => {
    expect(assets(initialState, watchAsset(asset)).watchlist.data).toContainEqual(asset);
  });

  test('The asset should be removed from the watchlist', () => {
    const previousState = {
      allAssets: { data: [], loading: false },
      watchlist: { data: [asset], loading: false },
    };
    expect(assets(previousState, unwatchAsset(asset)).watchlist.data).not.toContainEqual(asset);
  });
});
