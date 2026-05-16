export interface ItemObje {
  name: string;
  id: number;
  price: number;
  amount: number;
  image: string;
};

export interface ShopStatObje {
  balance: number;
  items: ItemObje[];
};

export interface SetAmouParaObje {
  item: ItemObje;
  operationValue: number;
  operator: string;
};

export interface ReceItemObje {
  name: string;
  amount: number;
  cost: number;
};
