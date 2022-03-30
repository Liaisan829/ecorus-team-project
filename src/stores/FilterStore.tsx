// export interface CheckboxModel {
//   name: string,
//   isChecked: boolean
// }
//
// export const Genders: Array<CheckboxModel> = [
//   { name: "Мужской", isChecked: false },
//   { name: "Женский", isChecked: false }
// ];
//
// export const GoodsType: Array<CheckboxModel> = [
//   { name: "Одежда", isChecked: false },
//   { name: "Обувь", isChecked: false },
//   { name: "Аксессуары", isChecked: false }
// ];
//
// export const Brands: Array<CheckboxModel> = [
//   { name: "H&M", isChecked: false },
//   { name: "P&B", isChecked: false },
//   { name: "Adidas", isChecked: false },
//   { name: "Nike", isChecked: false },
//   { name: "Rebook", isChecked: false }
// ];
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
