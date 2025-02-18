export type ToogThemPropObje = {
  theme: string,
  setTheme: (theme: string) => void
}

export type ItemImagPropObje = {
  name: string,
  image: string
}

export type ItemObje = {
  name: string,
  id: number,
  price: number,
  amount: number,
  image: string
}

export type ShopStatObje = {
  balance: number,
  items: ItemObje[]
}

export type SetAmouParaObje = {
  item: ItemObje,
  operationValue: number,
  operator: string
}

export type ReceItemObje = {
  name: string,
  amount: number,
  cost: number
}
