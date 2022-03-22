import { observable } from "mobx";

export interface CheckboxModel {
  id: number,
  text: string,
  checked: boolean
}

export class CheckboxStore {
  @observable genders: Array<CheckboxModel> = [
    {
      id: 1,
      text: "Мужской",
      checked: false
    },
    {
      id: 2,
      text: "Женский",
      checked: false
    }
  ];

  @observable goodsType: Array<CheckboxModel> = [
    {
      id: 1,
      text: "Выбрать все",
      checked: false
    },
    {
      id: 2,
      text: "Одежда",
      checked: false
    },
    {
      id: 3,
      text: "Обувь",
      checked: false
    },
    {
      id: 4,
      text: "Аксессуары",
      checked: false
    }
  ];

  @observable brands: Array<CheckboxModel> = [
    {
      id: 1,
      text: "Выбрать все",
      checked: false
    },
    {
      id: 2,
      text: "H&M",
      checked: false
    },
    {
      id: 3,
      text: "P&B",
      checked: false
    },
    {
      id: 4,
      text: "Adidas",
      checked: false
    },
    {
      id: 5,
      text: "Nike",
      checked: false
    },
    {
      id: 6,
      text: "Reebok",
      checked: false
    }
  ];
}
