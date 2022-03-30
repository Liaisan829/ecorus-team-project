export interface CheckboxModel {
  name: string,
  isChecked: boolean
}

export const Genders: Array<CheckboxModel> = [
  { name: "Мужской", isChecked: false },
  { name: "Женский", isChecked: false }
];

export const GoodsType: Array<CheckboxModel> = [
  { name: "Одежда", isChecked: false },
  { name: "Обувь", isChecked: false },
  { name: "Аксессуары", isChecked: false }
];

export const Brands: Array<CheckboxModel> = [
  { name: "H&M", isChecked: false },
  { name: "P&B", isChecked: false },
  { name: "Adidas", isChecked: false },
  { name: "Nike", isChecked: false },
  { name: "Rebook", isChecked: false }
];