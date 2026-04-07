import { useSelector } from "react-redux";
import ItemShopping from "./ItemShopping";
import { selectShopping } from "@/lib/features/shopping/shoppingSlice";
import ItemImage from "@/utils/ItemImage";

function Items() {
  const { items } = useSelector(selectShopping);
  return (
    <div id='items'>
      {items.map((item) => <div className="item" key={item.id}>
        <div className="item-image">
          <ItemImage name={item.name} image={item.image} />
        </div>
        <div className="item-name">{item.name}</div>
        <div className="item-cost">${item.price.toLocaleString('en-US')}</div>
        <ItemShopping item={item} />
      </div>)}
    </div>
  )
}

export default Items;
