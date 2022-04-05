import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { EcoMarketCard } from "../../components/Cards/EcoMarketCard/EcoMarketCard";
import { Button } from "../../components/ui/Button/Button";
import currency from "../../svg-icons/currency.svg";
import styles from "./Ecomarket.module.scss";
import { FilterCheckboxes } from "../../containers/FilterCheckboxes/FilterCheckboxes";
import { ProductModel, Products } from "../../stores/ProductStore";
import { useEffect, useState } from "react";

export const Ecomarket = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);

  useEffect(()=>{
    setProducts(Products);
  }, [])

  const onGetPromocodeClick = () => {
    console.log("click");
  };

  const onButtonClick = () => {
    console.log("click");
  };

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

          <div className={styles.ecomarket__content}>
            <div className={styles.filter}>
              <FilterCheckboxes />
            </div>

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
        </div>
      </BaseLayout>
    </>
  );
};
