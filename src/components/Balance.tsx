import { useSelector } from "react-redux";
import { selectShopping } from "@/lib/features/shopping/shoppingSlice";

function Balance() {

  const balance = useSelector(selectShopping).balance.toLocaleString('en-US');

  return <div id='balance'>Balance: ${balance}</div>

}

export default Balance;
