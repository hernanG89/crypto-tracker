import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllAssets, updateAssets } from './thunks';

import { Asset } from './types';

type SliceState = {
  watchlist: { loading: boolean; data: Asset[] };
  allAssets: { loading: boolean; data: Asset[] };
};

export const initialState: SliceState = {
  watchlist: { data: [], loading: false },
  allAssets: { loading: false, data: [] },
};

export const reducerName = 'assets';
const assets = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    watchAsset: (state, action: PayloadAction<Asset>) => {
      state.watchlist.data.push(action.payload);
    },
    unwatchAsset: (state, action: PayloadAction<Asset>) => {
      state.watchlist.data = state.watchlist.data.filter((asset) => asset.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAssets.pending, (state) => {
        state.allAssets.loading = true;
      })
      .addCase(getAllAssets.fulfilled, (state, action: PayloadAction<Asset[]>) => {
        state.allAssets.loading = false;
        state.allAssets.data = action.payload;
      })
      .addCase(getAllAssets.rejected, (state) => {
        state.allAssets.loading = false;
      });

    builder
      .addCase(updateAssets.pending, (state) => {
        state.watchlist.loading = true;
      })
      .addCase(updateAssets.fulfilled, (state, action: PayloadAction<Asset[]>) => {
        state.watchlist.loading = false;
        state.watchlist.data = action.payload;
      })
      .addCase(updateAssets.rejected, (state) => {
        state.watchlist.loading = false;
      });
  },
});

export const { watchAsset, unwatchAsset } = assets.actions;
export { getAllAssets, updateAssets };
export default assets.reducer;
