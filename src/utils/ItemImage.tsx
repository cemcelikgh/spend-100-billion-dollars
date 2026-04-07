import type { ItemImagElem } from '@/types/ElementTypes.d';
import Image from 'next/image';
 
const ItemImage: ItemImagElem = ({ name, image }) => {
  return <Image
    alt={name}
    src={`/images/item-images/${image}`}
    fill
    sizes='100%'
    style={{
      objectFit: 'contain'
    }}
  />;
};

export default ItemImage;
