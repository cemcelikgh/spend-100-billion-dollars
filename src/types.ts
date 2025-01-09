import { JSX } from "react";
export type ToogleThemeFnType = (theme: string, setTheme: (theme: string) => void) => JSX.Element;

export type ItemType = {
  name: string,
  id: number,
  price: number,
  amount: number,
  image: string
}

export type ItemsType = ItemType[];

export type ShoppingStateType = {
  balance: number,
  items: ItemsType
}

export type ReceiptStateType = ReceiptItemType[];

export type ItemImageFn = (name: string, image: string) => JSX.Element;

export type SetAmountFnType = {
  item: ItemType,
  operationValue: number,
  operator: string
}

export type ReceiptItemType = {
  name: string,
  amount: number,
  cost: number
}

export type FormatNumberFnType = ( number: number ) => string;
