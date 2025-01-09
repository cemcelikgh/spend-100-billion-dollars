import { useSelector } from "react-redux";
import { selectShopping } from "@/redux/slices/shopping-slice/shoppingSlice";

function Balance() {

  const balance = useSelector(selectShopping).balance.toLocaleString('en-US');

  return (
    <div id='balance'>Balance: ${balance}</div>
  )
}

export default Balance;
