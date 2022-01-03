import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import AssetItem from '../AssetItem';
import testIds from '../AssetItem/testIds';
import { Asset } from '../../store/slices/assets/types';
import colors from '../../styles/colors';
import images from '../../assets/images';

describe('AssetItem', () => {
  const onItemPress = jest.fn();
  const asset: Asset = { id: '1', name: 'Bitcoin', slug: 'bitcoin', symbol: 'BTC' };
  test('Render Item', () => {
    const { getByTestId } = render(<AssetItem item={asset} />);

    const assetComponent = getByTestId(`${testIds.ASSET_ITEM_CONTAINER_}${asset.id}`);
    expect(assetComponent).toBeDefined();
  });

  /**  test('With onItemPress callback, the onPress should be enabled', () => {
    const { getByTestId } = render(<AssetItem item={asset} onItemPress={onItemPress} />);

    const pressableAsset = getByTestId(`${testIds.ASSET_ITEM_ON_PRESS_}${asset.id}`);
    expect(pressableAsset).toBeEnabled();
  });

  test('Without the onItemPress callback, the onPress should be disabled', () => {
    const { getByTestId } = render(<AssetItem item={asset} />);

    const pressableAsset = getByTestId(`${testIds.ASSET_ITEM_ON_PRESS_}${asset.id}`);
    expect(pressableAsset).toBeDisabled();
  });*/

  test('The onItemPress callback should be called with the asset', () => {
    const { getByTestId } = render(<AssetItem item={asset} onItemPress={onItemPress} />);

    const pressableAsset = getByTestId(`${testIds.ASSET_ITEM_ON_PRESS_}${asset.id}`);
    fireEvent.press(pressableAsset);
    expect(onItemPress).toBeCalledWith(asset);
  });

  test('Render market data', () => {
    const { getByTestId } = render(
      <AssetItem
        item={{ ...asset, marketData: { priceUSD: 1, percentageChangeLast24HoursUSD: 1 } }}
        onItemPress={onItemPress}
      />
    );

    const marketDataComponent = getByTestId(
      `${testIds.ASSET_ITEM_MARKET_DATA_CONTAINER_}${asset.id}`
    );
    expect(marketDataComponent).toBeDefined();
  });

  test('Render market data', () => {
    const { getByTestId } = render(
      <AssetItem
        item={{ ...asset, marketData: { priceUSD: 1, percentageChangeLast24HoursUSD: 1 } }}
        onItemPress={onItemPress}
      />
    );

    const marketDataComponent = getByTestId(
      `${testIds.ASSET_ITEM_MARKET_DATA_CONTAINER_}${asset.id}`
    );
    expect(marketDataComponent).toBeDefined();
  });

  test('The asset percentage variation should match positive styles', () => {
    const { getByTestId } = render(
      <AssetItem
        item={{ ...asset, marketData: { priceUSD: 1, percentageChangeLast24HoursUSD: 1 } }}
      />
    );

    const iconComponent = getByTestId(
      `${testIds.ASSET_ITEM_MARKET_DATA_PERCENTAGE_VARIATION_ICON_}${asset.id}`
    );
    const textComponent = getByTestId(
      `${testIds.ASSET_ITEM_MARKET_DATA_PERCENTAGE_VARIATION_TEXT_}${asset.id}`
    );

    expect(iconComponent).toHaveProp('source', images.northWestArrow);

    expect(textComponent).toHaveStyle({ color: colors.greenSuccess });
  });

  test('The asset percentage variation should match positive styles', () => {
    const { getByTestId } = render(
      <AssetItem
        item={{ ...asset, marketData: { priceUSD: 1, percentageChangeLast24HoursUSD: -1 } }}
      />
    );

    const iconComponent = getByTestId(
      `${testIds.ASSET_ITEM_MARKET_DATA_PERCENTAGE_VARIATION_ICON_}${asset.id}`
    );
    const textComponent = getByTestId(
      `${testIds.ASSET_ITEM_MARKET_DATA_PERCENTAGE_VARIATION_TEXT_}${asset.id}`
    );
    expect(iconComponent).toHaveProp('source', images.southEastArrow);

    expect(textComponent).toHaveStyle({ color: colors.redDanger });
  });
});
