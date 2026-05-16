'use client';

import type { ItemObje } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { buyItem, selectBalance, sellItem, setAmount }
  from "@/lib/features/shopping/shoppingSlice";
import { useState } from "react";
import { setReceiptItem } from "@/lib/features/receiptSlice";

function Shopping({ item } : { item: ItemObje }) {

  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);
  const [buyingCount, setBuyingCount] = useState(0);
  const [amountInput, setAmountInput] = useState('0');

  const handleBuyItem = (item: ItemObje) => {
    dispatch(buyItem(item));
    setBuyingCount(buyingCount + 1);
    setAmountInput(buyingCount => (Number(buyingCount) + 1).toString());
    dispatch(setReceiptItem({ name: item.name, amount: 1, cost: item.price }));
  };

  const handleSellItem = (item: ItemObje) => {
    dispatch(sellItem(item));
    setBuyingCount(buyingCount - 1);
    setAmountInput(buyingCount => (Number(buyingCount) - 1).toString());
    dispatch(setReceiptItem({ name: item.name, amount: -1, cost: -item.price }));
  };

  const handleAmountInput = (item: ItemObje, e: React.ChangeEvent<HTMLInputElement>) => {

    dispatch(setAmount({ item, operationValue: buyingCount, operator: 'addition' }));
    setBuyingCount(0);
    dispatch(setReceiptItem({ name: item.name, amount: -buyingCount, cost: -buyingCount * item.price }));

    const maxInputValue = Math.min(
      Math.floor((balance +  buyingCount * item.price) / item.price),
      item.amount + buyingCount
    );

    const inputStrVal = e.target.value;
    if (!/^\d*$/.test(inputStrVal)) return;
    const sanitizedValue = inputStrVal.replace(/^0+/, '') || '0';
    const inputValue = Number(sanitizedValue);

    if (maxInputValue < inputValue) {
      dispatch(setAmount({ item, operationValue: maxInputValue, operator: 'subtraction' }));
      setAmountInput(maxInputValue.toString());
      setBuyingCount(maxInputValue);
      dispatch(setReceiptItem({ name: item.name, amount: maxInputValue, cost: maxInputValue * item.price }));
    } else {
      dispatch(setAmount({ item, operationValue: inputValue, operator: 'subtraction' }));
      setAmountInput(inputValue.toString());
      setBuyingCount(inputValue);
      dispatch(setReceiptItem({ name: item.name, amount: inputValue, cost: inputValue * item.price }));
    };

  };

  return (
    <div className="shopping">
      <button className="item-buy"
        disabled={item.price > balance || item.amount === 0 ? true : false}
        onClick={() => {handleBuyItem(item)}}
      >Buy</button>
      <input className="numbers-of-items"
        type="number"
        name="amount-of-purchase"
        value={amountInput}
        onChange={(e) => {handleAmountInput(item, e)}}
      />
      <button className="item-sell"
        disabled={buyingCount === 0 ? true : false}
        onClick={() => {handleSellItem(item)}}
      >Sell</button>
    </div>
  );

}

export default Shopping;
