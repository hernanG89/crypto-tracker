import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllAssets, updateAssetsMarketData } from './thunks';

import { Asset } from './types';

type SliceState = {
  watchlist: { loading: boolean; data: Asset[] };
  allAssets: { loading: boolean; data: Asset[] };
};

const data = [
  {
    id: '1',
    name: 'Bitcoin',
    slug: 'bitcoin',
    symbol: 'BTC',
    marketData: { priceUSD: 7777.77, percentageChangeLast24HoursUSD: -1.57 },
  },
  {
    id: '2',
    name: 'Ethereum',
    slug: 'ethereum',
    symbol: 'ETH',
    marketData: { priceUSD: 888.77, percentageChangeLast24HoursUSD: 1.57 },
  },
  {
    id: '3',
    name: 'Solana',
    slug: 'solana',
    symbol: 'SOL',
    marketData: { priceUSD: 12.77, percentageChangeLast24HoursUSD: 15.57 },
  },
];

export const initialState: SliceState = {
  watchlist: { data: [...data], loading: false },
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
      .addCase(updateAssetsMarketData.pending, (state) => {
        state.watchlist.loading = true;
      })
      .addCase(updateAssetsMarketData.fulfilled, (state, action: PayloadAction<Asset[]>) => {
        state.watchlist.loading = false;
        state.watchlist.data = action.payload;
      })
      .addCase(updateAssetsMarketData.rejected, (state) => {
        state.watchlist.loading = false;
      });
  },
});

export const { watchAsset, unwatchAsset } = assets.actions;
export { getAllAssets, updateAssetsMarketData };
export default assets.reducer;