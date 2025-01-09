import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { ShoppingStateType, ItemType, SetAmountFnType } from '../../../types';
import items from '@/redux/slices/shopping-slice/itemsArray';

const initialState: ShoppingStateType = {
  balance: 100000000000,
  items: items
}

function buyItem(state: ShoppingStateType, action: PayloadAction<ItemType>): void {
  if ( action.payload.price <= state.balance || action.payload.amount > 0 ) {
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
    state.items[itemIndex].amount -= 1;
    state.balance -= state.items[itemIndex].price;
  }
}

function sellItem(state: ShoppingStateType, action: PayloadAction<ItemType>): void {
  const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
  state.items[itemIndex].amount += 1;
  state.balance += state.items[itemIndex].price;
}

function setAmount(state: ShoppingStateType, action: PayloadAction<SetAmountFnType>): void {
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
  name: 'app',
  initialState,
  reducers: {
    buyItem,
    sellItem,
    setAmount
  }
})

export const { buyItem: buyItemAction, sellItem: sellItemAction, setAmount: setAmountAction } = shoppingSlice.actions;

export const selectShopping = (state: RootState) => state.shopping;

export default shoppingSlice.reducer;
