import { ItemImageFn } from '@/types';
import Image from 'next/image';
 
const ItemImage: ItemImageFn = (name, image) => {
  return <Image
    alt={name}
    src={`/item-images/images/${image}`}
    fill
    sizes='100%'
    style={{
      objectFit: 'contain'
    }}
  />;
};

export default ItemImage;
