import { useSelector } from "react-redux";
import ItemShopping from "../ItemShopping";
import { selectShopping } from "@/redux/slices/shopping-slice/shoppingSlice";
import ItemImage from "../../../public/item-images/itemImages";

function Items() {
  const { items } = useSelector(selectShopping);
  return (
    <div id='items'>
      {items.map((item) => <div className="item" key={item.id}>
        <div className="item-image">
          {ItemImage(item.name, item.image)}
        </div>
        <div className="item-name">{item.name}</div>
        <div className="item-cost">${item.price.toLocaleString('en-US')}</div>
        <ItemShopping item={item} />
      </div>)}
    </div>
  )
}

export default Items;
