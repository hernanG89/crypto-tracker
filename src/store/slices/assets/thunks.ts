import { createAsyncThunk } from '@reduxjs/toolkit';
import assetsApi from '../../../api/assetsApi';

export const getAllAssets = createAsyncThunk('assets/getAllAssets', async () => {
  const response = await assetsApi.getAllAssets();
  return response.data;
});

export const updateAssetsMarketData = createAsyncThunk(
  'assets/updateAssetsMarketData',
  async (thunkAPI) => {
    const assetsSymbol: string[] = thunkAPI.getState().watchlist.map((asset) => asset.symbol);
    const responses = await Promise.all(
      assetsSymbol.map((symbol) => assetsApi.getAssetMarketData(symbol))
    );

    return responses.map((response) => response.data);
  }
);
