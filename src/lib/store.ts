import shoppingReducer from './features/shoppingSlice/shoppingSlice';
import receiptReducer from './features/receiptSlice';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
  return configureStore({
    reducer: {
      shopping: shoppingReducer,
      receipt: receiptReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
