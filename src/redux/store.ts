import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './slices/shopping-slice/shoppingSlice';
import receiptReducer from './slices/receiptSlice';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    receipt: receiptReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
