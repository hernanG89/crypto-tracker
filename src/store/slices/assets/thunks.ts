import { createAsyncThunk } from '@reduxjs/toolkit';

import assetsApi from '../../../api/assetsApi';
import { mapToAsset, mapToAssetWithMarketData } from '../../../api/assetsApi/transformers';

export const getAllAssets = createAsyncThunk('assets/getAllAssets', async () => {
  const response = await assetsApi.getAllAssets();

  return response.data.map(mapToAsset);
});

export const updateAssets = createAsyncThunk('assets/updateAssets', async (_, thunkAPI) => {
  const ids = thunkAPI.getState().assets.watchlist.data.map((asset) => asset.id);

  const response = await assetsApi.getAssets(ids);

  return response.data.map(mapToAssetWithMarketData);
});
