import {  useAppSelector } from "@/lib/hooks/hooks";
import ItemShopping from "./ItemShopping";
import { selectShopping } from "@/lib/features/shopping/shoppingSlice";
import Image from "next/image";

function Items() {

  const { items } = useAppSelector(selectShopping);

  return (
    <div id='items'>
      {items.map((item) => <div className="item" key={item.id}>
        <div className="item-image">
          <Image
            src={`/images/item-images/${item.image}`}
            style={{ objectFit: 'contain' }}
            sizes='100%'
            fill
            alt={item.name}
          />
        </div>
        <div className="item-name">{item.name}</div>
        <div className="item-cost">${item.price.toLocaleString('en-US')}</div>
        <ItemShopping item={item} />
      </div>)}
    </div>
  );

}

export default Items;
