import { createAsyncThunk } from '@reduxjs/toolkit';

import assetsApi from '../../../api/assetsApi';
import { mapGetAssetMarketData } from '../../../api/assetsApi/transformers';

export const getAllAssets = createAsyncThunk('assets/getAllAssets', async () => {
  const response = await assetsApi.getAllAssets();

  return response.data.data.filter((asset) => !!asset.symbol);
});

export const updateAssetsMarketData = createAsyncThunk(
  'assets/updateAssetsMarketData',
  async (_, thunkAPI) => {
    const assetsSymbol: string[] = await thunkAPI
      .getState()
      .assets.watchlist.data.map((asset) => asset.symbol);

    const responses = await Promise.all(
      assetsSymbol.map((symbol) => assetsApi.getAssetMarketData(symbol.toLowerCase()))
    );

    const data = responses.map((response) => response.data);
    return data.map(mapGetAssetMarketData);
  }
);
