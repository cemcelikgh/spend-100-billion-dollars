import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './features/shopping/shoppingSlice';
import receiptReducer from './features/receiptSlice';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    receipt: receiptReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
