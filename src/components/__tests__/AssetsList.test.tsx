import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import AssetsList from '../AssetsList';
import testIds from '../AssetsList/testIds';
import itemTestIds from '../AssetItem/testIds';

import { Asset } from '../../store/slices/assets/types';

describe('AssetItem', () => {
  const onItemPress = jest.fn();
  const assets: Asset[] = [
    { id: '1', name: 'Bitcoin', slug: 'bitcoin', symbol: 'BTC' },
    { id: '2', name: 'Ethereum', slug: 'ethereum', symbol: 'ETH' },
  ];

  test('Render Item', () => {
    const { getByTestId } = render(<AssetsList assets={assets} />);

    const listComponent = getByTestId(testIds.ASSETS_LIST_CONTAINER);
    expect(listComponent).toBeDefined();
  });

  test('Amount of Items', () => {
    const { getAllByTestId } = render(<AssetsList assets={assets} />);

    const itemComponents = getAllByTestId(new RegExp(itemTestIds.ASSET_ITEM_CONTAINER_));
    expect(itemComponents.length).toBe(assets.length);
  });

  test('Item pressed', () => {
    const assetToSelect = assets[1];
    const { getByTestId } = render(<AssetsList assets={assets} onAssetPress={onItemPress} />);

    const pressableAsset = getByTestId(`${itemTestIds.ASSET_ITEM_ON_PRESS_}${assetToSelect.id}`);
    fireEvent.press(pressableAsset);
    expect(onItemPress).toBeCalledWith(assetToSelect);
  });
});
