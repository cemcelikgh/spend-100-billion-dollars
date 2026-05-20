'use client';

import {  useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { selectItems } from "@/lib/features/shoppingSlice/shoppingSlice";
import Quantity from "./quantity/Quantity";

function Items() {

  const items = useAppSelector(selectItems);

  return (
    <div id='items'>
      {items.map((item) => {
      const id = item.id;
      return <div className="item" key={id}>
        <div className="item-image">
          <Image
            src={`/images/items/${item.image}`}
            style={{ objectFit: 'contain' }}
            sizes='100%'
            fill
            alt={item.name}
            loading={[1, 2, 3, 4, 5, 6].includes(id) ? 'eager' : undefined}
          />
        </div>
        <div className="item-name">{item.name}</div>
        <div className="item-cost">${item.price.toLocaleString('en-US')}</div>
        <Quantity item={item} />
      </div>})}
    </div>
  );

}

export default Items;
