export interface Product{
  name: string;
  checked: boolean;
}

export const allGenders: Product[] = [
  {name: "Мужской", checked: false},
  {name: "Женский", checked:false}
]


export const allTypes: Product[] = [
  {name: "Одежда", checked: false},
  {name: "Обувь", checked: false},
  {name: "Аксессуары", checked: false}
]

export const allBrands: Product[] = [
  {name: "H&M", checked: false},
  {name: "P&B", checked: false},
  {name: "Adidas", checked: false},
  {name: "Nike", checked: false},
  {name: "Rebook", checked: false}
]
