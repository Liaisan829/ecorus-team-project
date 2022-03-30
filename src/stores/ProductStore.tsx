import sneak1 from "../svg-icons/ecoMarket/sneak1.svg";
import sneak2 from "../svg-icons/ecoMarket/sneak2.svg";
import sneak3 from "../svg-icons/ecoMarket/sneak3.svg";
import hoodie from "../svg-icons/ecoMarket/hoodie.svg";
import sneak4 from "../svg-icons/ecoMarket/sneak4.svg";

export interface ProductModel {
  brand: string,
  img: any,
  name: string,
  gender: string,
  price: string,
  onClick: Function
}

export const Products: Array<ProductModel> = [
  {
    brand: "NIKE",
    img: sneak1,
    name: "Nike Air Max 2022",
    gender: "Мужская обувь",
    price: "1000",
    onClick: () => {}
  },
  {
    brand: "NIKE",
    img: sneak2,
    name: "Nike Air Max 90 Premium",
    gender: "Мужская обувь",
    price: "750",
    onClick: () => {}
  },
  {
    brand: "Adidas",
    img: sneak3,
    name: "Adidas Alphabounce RC",
    gender: "Мужская обувь",
    price: "1200",
    onClick: () => {}
  },
  {
    brand: "H&M",
    img: hoodie,
    name: "Nike Air Max 2021",
    gender: "Мужское худи",
    price: "1000",
    onClick: () => {}
  },
  {
    brand: "NIKE",
    img: sneak4,
    name: "Nike Air Force 1 Low",
    gender: "Мужская обувь",
    price: "2100",
    onClick: () => {}
  }
];