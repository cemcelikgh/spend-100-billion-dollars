import { useSelector } from "react-redux";
import { selectReceipt } from "@/lib/features/receiptSlice";
import type { FormatNumber } from "@/types/FunctionTypes";

function Receipt() {

  const receipt = useSelector(selectReceipt);

  const formatNumber: FormatNumber = (number) => {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        const kilo = number / 1000;
        return `${kilo.toFixed(1).replace(/\.0$/, '')}k`;
    } else if (number >= 1000000 && number < 1000000000) {
        const million = number / 1000000;
        return `${million.toFixed(1).replace(/\.0$/, '')}m`;
    } else {
        const billion = number / 1000000000;
        return `${billion.toFixed(1).replace(/\.0$/, '')}b`;
    }
}

  return (receipt.length > 0 &&
    <div id='receipt'>
      <h2>Your Receipt</h2>
      <ul>
        {receipt.map(item => item.amount &&
        <li key={item.name}>
          <div className="receipt-item-name">{item.name}</div>
          <div className="receipt-item-amount">x{formatNumber(item.amount)}</div>
          <div className="receipt-item-cost">${formatNumber(item.cost)}</div>
        </li>)}
      </ul>
      <div id="total">
        <div>TOTAL</div>
        <div>
          ${receipt.filter(item => item.amount !== 0).reduce(
            (acc, item) => acc + item.cost, 0
          ).toLocaleString('en-US')}
        </div>
      </div>
    </div>
  )
}

export default Receipt;
