import { configureStore } from '@reduxjs/toolkit';
import assetsReducer, { reducerName as assetsReducerName } from './slices/assets/assets';

const store = configureStore({
  reducer: {
    [assetsReducerName]: assetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
