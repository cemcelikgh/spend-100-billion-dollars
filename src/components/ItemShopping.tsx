import type { ItemObje } from "@/types/ObjectTypes";
import { useDispatch, useSelector } from "react-redux";
import { selectShopping, buyItemAction, sellItemAction, setAmountAction }
  from "@/lib/features/shopping/shoppingSlice";
import { useState } from "react";
import { setReceiptItemAction } from "@/lib/features/receiptSlice";

function ItemShopping({ item } : { item: ItemObje }) {

  const { balance } = useSelector(selectShopping);
  const [buyingCount, setBuyingCount] = useState<number>(0);
  const [amountInput, setAmountInput] = useState<string>('0');
  const dispatch = useDispatch();

  const handleBuyItem = (item: ItemObje) => {
    dispatch(buyItemAction(item));
    setBuyingCount(buyingCount + 1);
    setAmountInput(buyingCount => (Number(buyingCount) + 1).toString());
    dispatch(setReceiptItemAction({ name: item.name, amount: 1, cost: item.price }));
  };

  const handleSellItem = (item: ItemObje) => {
    dispatch(sellItemAction(item));
    setBuyingCount(buyingCount - 1);
    setAmountInput(buyingCount => (Number(buyingCount) - 1).toString());
    dispatch(setReceiptItemAction({ name: item.name, amount: -1, cost: -item.price }));
  };

  const handleAmountInput = (item: ItemObje, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputStrVal = e.target.value;
    if (!/^\d*$/.test(inputStrVal)) return;
    const sanitizedValue = inputStrVal.replace(/^0+/, '') || '0';
    const inputValue = Number(sanitizedValue);

    dispatch(setAmountAction({ item, operationValue: buyingCount, operator: 'addition' }));
    setBuyingCount(0);
    dispatch(setReceiptItemAction({ name: item.name, amount: -buyingCount, cost: -buyingCount * item.price }));

    const maxInputValue = Math.min(
      Math.floor((balance +  buyingCount * item.price) / item.price),
      item.amount + buyingCount
    );
    if (maxInputValue < inputValue) {
      dispatch(setAmountAction({ item, operationValue: maxInputValue, operator: 'subtraction' }));
      setAmountInput(maxInputValue.toString());
      setBuyingCount(maxInputValue);
      dispatch(setReceiptItemAction({ name: item.name, amount: maxInputValue, cost: maxInputValue * item.price }));
    } else {
      dispatch(setAmountAction({ item, operationValue: inputValue, operator: 'subtraction' }));
      setAmountInput(inputValue.toString());
      setBuyingCount(inputValue);
      dispatch(setReceiptItemAction({ name: item.name, amount: inputValue, cost: inputValue * item.price }));
    }
  }

  return (
    <div className="item-shopping">
      <button className="item-buy"
        disabled={item.price > balance || item.amount === 0 ? true : false}
        onClick={() => {handleBuyItem(item)}}
      >Buy</button>
      <input className="number-of-items"
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
  )
}

export default ItemShopping;
