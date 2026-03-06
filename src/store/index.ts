import { configureStore } from '@reduxjs/toolkit';
import pricingReducer from './pricingSlice';
import tariffsReducer from './tariffs/tariffsSlice';

export const store = configureStore({
  reducer: {
    pricing: pricingReducer,
    tariffs: tariffsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
