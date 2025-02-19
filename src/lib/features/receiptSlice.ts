import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { ReceItemObje } from '@/types/ObjectTypes';

const initialState: ReceItemObje[] = [];

function setReceiptItem(state: ReceItemObje[], action: PayloadAction<ReceItemObje>) {
  const itemIndex = state.findIndex(item => item.name === action.payload.name);
  if (itemIndex === -1) {
    if (action.payload.amount > 0) {
      state.push(action.payload);
    }
  } else {
    state[itemIndex].amount += action.payload.amount;
    state[itemIndex].cost += action.payload.cost;
    if (state[itemIndex].amount === 0) {
      state.splice(itemIndex, 1)
    }
  }
}

export const receiptSlice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    setReceiptItem
  }
})

export const { setReceiptItem: setReceiptItemAction } = receiptSlice.actions;

export const selectReceipt = (state: RootState) => state.receipt;

export default receiptSlice.reducer;
