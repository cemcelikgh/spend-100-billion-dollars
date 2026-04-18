import { createSlice } from '@reduxjs/toolkit';
import items from './itemsArray';
import type { ItemObje, SetAmouParaObje, ShopStatObje }
  from '@/types/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    balance: 100000000000,
    items: items,
  },
  reducers: {
    buyItem: (state: ShopStatObje, action: PayloadAction<ItemObje>) => {
      if ( action.payload.price <= state.balance || action.payload.amount > 0 ) {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        state.items[itemIndex].amount -= 1;
        state.balance -= state.items[itemIndex].price;
      };
    },
    sellItem: (state: ShopStatObje, action: PayloadAction<ItemObje>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.items[itemIndex].amount += 1;
      state.balance += state.items[itemIndex].price;
    },
    setAmount: (state: ShopStatObje, action: PayloadAction<SetAmouParaObje>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.item.id);
      if (action.payload.operator === 'subtraction') {
        state.items[itemIndex].amount -= action.payload.operationValue;
        state.balance -= state.items[itemIndex].price * action.payload.operationValue;
      } else {
        state.items[itemIndex].amount += action.payload.operationValue;
        state.balance += state.items[itemIndex].price * action.payload.operationValue;
      };
    },
  },
});

export const { buyItem, sellItem, setAmount } = shoppingSlice.actions;
export const selectShopping = (state: RootState) => state.shopping;
export default shoppingSlice.reducer;
