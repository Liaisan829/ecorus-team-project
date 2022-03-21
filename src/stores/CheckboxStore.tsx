import { observable } from "mobx";

interface CheckboxModel {
  text: string,
  clicked: boolean
}

export class CheckboxStore {
  @observable genders: Array<CheckboxModel> = [
    {
      text: "Мужской",
      clicked: false
    },
    {
      text: "Женский",
      clicked: false
    }
  ];

  @observable goodsType: Array<CheckboxModel> = [
    {
      text: "Выбрать все",
      clicked: false
    },
    {
      text: "Одежда",
      clicked: false
    },
    {
      text: "Обувь",
      clicked: false
    },
    {
      text: "Аксессуары",
      clicked: false
    }
  ];

  @observable brands: Array<CheckboxModel> = [
    {
      text: "Выбрать все",
      clicked: false
    },
    {
      text: "H&M",
      clicked: false
    },
    {
      text: "P&B",
      clicked: false
    },
    {
      text: "Adidas",
      clicked: false
    },
    {
      text: "Nike",
      clicked: false
    },
    {
      text: "Reebok",
      clicked: false
    }
  ];
}