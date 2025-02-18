import { createSlice } from '@reduxjs/toolkit';
import items from './itemsArray';
import type { ItemObje, SetAmouParaObje, ShopStatObje }
  from '@/types/ObjectTypes';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

const initialState: ShopStatObje = {
  balance: 100000000000,
  items: items
}

function buyItem(state: ShopStatObje, action: PayloadAction<ItemObje>): void {
  if ( action.payload.price <= state.balance || action.payload.amount > 0 ) {
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
    state.items[itemIndex].amount -= 1;
    state.balance -= state.items[itemIndex].price;
  }
}

function sellItem(state: ShopStatObje, action: PayloadAction<ItemObje>): void {
  const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
  state.items[itemIndex].amount += 1;
  state.balance += state.items[itemIndex].price;
}

function setAmount(state: ShopStatObje, action: PayloadAction<SetAmouParaObje>): void {
  const itemIndex = state.items.findIndex(item => item.id === action.payload.item.id);
  if (action.payload.operator === 'subtraction') {
    state.items[itemIndex].amount -= action.payload.operationValue;
    state.balance -= state.items[itemIndex].price * action.payload.operationValue;
  } else {
    state.items[itemIndex].amount += action.payload.operationValue;
    state.balance += state.items[itemIndex].price * action.payload.operationValue;
  }
}

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: { buyItem, sellItem, setAmount }
})

export const {
  buyItem: buyItemAction,
  sellItem: sellItemAction,
  setAmount: setAmountAction
} = shoppingSlice.actions;

export const selectShopping = (state: RootState) => state.shopping;

export default shoppingSlice.reducer;
