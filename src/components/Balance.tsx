'use client';

import { selectBalance } from "@/lib/features/shoppingSlice/shoppingSlice";
import { useAppSelector } from "@/lib/hooks";

function Balance() {

  const balance = useAppSelector(selectBalance).toLocaleString('en-US');

  return <div id='balance'>Balance: ${balance}</div>;

}

export default Balance;
