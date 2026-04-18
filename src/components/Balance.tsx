import { useAppSelector } from "@/lib/hooks/hooks";
import { selectShopping } from "@/lib/features/shopping/shoppingSlice";

function Balance() {

  const balance = useAppSelector(selectShopping).balance.toLocaleString('en-US');

  return <div id='balance'>Balance: ${balance}</div>

}

export default Balance;
