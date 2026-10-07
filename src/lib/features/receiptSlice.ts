import type { PayloadAction } from '@reduxjs/toolkit';
import type { ReceItemObje } from '@/types/types';
import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ReceItemObje[] = [];

export const receiptSlice = createSlice({
  name: 'receipt',
  initialState: initialState,
  reducers: {
    setReceiptItem: (state: ReceItemObje[], action: PayloadAction<ReceItemObje>) => {
      const itemIndex = state.findIndex(item => item.name === action.payload.name);
      if (itemIndex === -1) {
        if (action.payload.amount > 0) { state.push(action.payload) };
      } else {
        state[itemIndex].amount += action.payload.amount;
        state[itemIndex].cost += action.payload.cost;
        if (state[itemIndex].amount === 0) { state.splice(itemIndex, 1) };
      };
    },
  },
});

export const { setReceiptItem } = receiptSlice.actions;
export const selectReceipt = (state: RootState) => state.receipt;

export default receiptSlice.reducer;
