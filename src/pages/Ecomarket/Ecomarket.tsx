import { useStores } from "../../utils/use-stores-hook";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { EcoMarketCard } from "../../components/EcoMarketCard/EcoMarketCard";
import { Button } from "../../components/ui/Button/Button";
import { Checkbox } from "../../components/ui/Checkbox/Checkbox";
import { QrModal } from "../../components/Modals/QrModal/QrModal";
import sneak1 from "../../svg-icons/ecoMarket/sneak1.svg";
import sneak2 from "../../svg-icons/ecoMarket/sneak2.svg";
import sneak3 from "../../svg-icons/ecoMarket/sneak3.svg";
import sneak4 from "../../svg-icons/ecoMarket/sneak4.svg";
import hoodie from "../../svg-icons/ecoMarket/hoodie.svg";
import currency from "../../svg-icons/currency.svg";
import styles from "./Ecomarket.module.scss";
import { useState } from "react";
import {
  allBrands,
  allGenders,
  allTypes,
  Product
} from "../../stores/FilterStore";

export const Ecomarket = () => {

  const { modalStore: { setCurrentModal } } = useStores();
  const [genders, setGenders] = useState(allGenders);
  const [types, setTypes] = useState(allTypes);
  const [brands, setBrands] = useState(allBrands);
  const [clicked, setClicked] = useState(false);
  const [allProductsTypes, setAllProductsTypes] = useState(false);
  const [allProductsBrand, setAllProductsBrand] = useState(false);

  interface ProductModel {
    brand: string,
    img: any,
    name: string,
    gender: string,
    price: string,
    onClick: any
  }

  const onGetPromocodeClick = () => {
    console.log("click");
  };

  const onButtonClick = () => {
    console.log("click");
  };

  const onGetQRGet = () => {
    console.log("click");
    setCurrentModal(QrModal);
  };

  const checkStatusProducts = (index: number, setProducts: any, products: Product[]) => {
    setClicked(!clicked);
    setProducts(
      products.map((product: Product, currentIndex: number) =>
        currentIndex === index ? { ...product, checked: !product.checked } : product
      )
    );
    filterData();
  };


  const checkStatusAllProducts = (isAllProducts: boolean, setAllProducts: any, setProducts: any, products: Product[]) => {
    setClicked(!clicked);
    setAllProducts(!isAllProducts);
    setProducts(
      products.map((product: Product) =>
        isAllProducts ? { ...product, checked: false } :
          { ...product, checked: true }
      )
    );
  };

  const products: Array<ProductModel> = [
    {
      brand: "NIKE",
      img: sneak1,
      name: "Nike Air Max 2022",
      gender: "Мужская обувь",
      price: "1000",
      onClick: { onGetQRGet }
    },
    {
      brand: "NIKE",
      img: sneak2,
      name: "Nike Air Max 90 Premium",
      gender: "Мужская обувь",
      price: "750",
      onClick: { onGetQRGet }
    },
    {
      brand: "Adidas",
      img: sneak3,
      name: "Adidas Alphabounce RC",
      gender: "Мужская обувь",
      price: "1200",
      onClick: { onGetQRGet }
    },
    {
      brand: "H&M",
      img: hoodie,
      name: "Nike Air Max 2021",
      gender: "Мужское худи",
      price: "1000",
      onClick: { onGetQRGet }
    },
    {
      brand: "NIKE",
      img: sneak4,
      name: "Nike Air Force 1 Low",
      gender: "Мужская обувь",
      price: "2100",
      onClick: { onGetQRGet }
    }
  ];

  let filteredData = products;

  const filterData = () => {
    const brand = "Adidas";
    const type = "Обувь";

    filteredData = products.filter(item => {
      item.brand === brand && item.gender.toLowerCase().includes(type.toLowerCase());
    });
    return filteredData;
  };

  return (
    <>
      <BaseLayout>
        <div className={styles.container}>
          <div className={styles.ecomarket}>
            <h1>ЭкоМаркет</h1>
            <div className={styles.ecomarket__filterButtons}>
              <Button
                type={"button"}
                theme={"eco"}
                onClick={onButtonClick}
                children={"По популярности"}
              />

              <Button
                type={"button"}
                theme={"eco"}
                onClick={onButtonClick}
                children={"По цене"}
              />

              <Button
                type={"button"}
                theme={"eco"}
                onClick={onButtonClick}
                children={"По новизне"}
              />
            </div>
          </div>

          <aside className={styles.filter}>
            <div className={styles.filter__block}>

              <h3>Пол</h3>

              {genders.map((gender, index) => (
                  <Checkbox
                    key={gender.name}
                    isChecked={gender.checked}
                    checkHandler={() => checkStatusProducts(index, setGenders, genders)}
                    title={gender.name}
                    index={index}
                  />
                )
              )}

              <h3>Тип товара</h3>

              <Checkbox
                isChecked={allProductsTypes}
                checkHandler={() => checkStatusAllProducts(allProductsTypes, setAllProductsTypes, setTypes, types)}
                title={"Выбрать все"}
              />
              {types.map((type, index) =>
                <Checkbox
                  key={type.name}
                  isChecked={type.checked}
                  checkHandler={() => checkStatusProducts(index, setTypes, types)}
                  title={type.name}
                  index={index} />
              )}

              <h3>Брэнд</h3>

              <Checkbox
                isChecked={allProductsBrand}
                checkHandler={() => checkStatusAllProducts(allProductsBrand, setAllProductsBrand, setBrands, brands)}
                title={"Выбрать все"}
              />
              {brands.map((brand, index) =>
                <Checkbox
                  key={brand.name}
                  isChecked={brand.checked}
                  checkHandler={() => checkStatusProducts(index, setBrands, brands)}
                  title={brand.name}
                  index={index} />
              )}
            </div>
          </aside>

          <section className={styles.productCards}>
            <div className={styles.promocodeCard}>
              <div className={styles.promocodeCard__info}>
                <div className={styles.promocodeCard__info__text}>
                  <div className={styles.promocodeCard__info__balance}>
                    <p>На вашем балансе</p>
                    <img src={currency} alt="currency" />
                    <h6>200</h6>
                  </div>
                  <p>Вы можете обменять их на скидку 200 руб.</p>
                </div>
                <Button
                  type="submit"
                  onClick={onGetPromocodeClick}
                  theme={"green"}
                  children={"Получить промокод"}
                />
              </div>
            </div>

            {products.map(product => (
              <EcoMarketCard
                key={product.name}
                brand={product.brand}
                name={product.name}
                img={product.img}
                gender={product.gender}
                price={product.price}
                onClick={() => product.onClick}
              />
            ))}

            {/*<h1>Filtered data</h1>*/}
            {/*{filteredData.map(data => (*/}
            {/*  <EcoMarketCard*/}
            {/*    key={data.name}*/}
            {/*    brand={data.brand}*/}
            {/*    name={data.name}*/}
            {/*    img={data.img}*/}
            {/*    gender={data.gender}*/}
            {/*    price={data.price}*/}
            {/*    onClick={data.onClick}*/}
            {/*  />*/}
            {/*))}*/}
          </section>
        </div>
      </BaseLayout>
    </>
  );
};
