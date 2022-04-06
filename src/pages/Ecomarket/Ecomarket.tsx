import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { EcoMarketCard } from "../../components/Cards/EcoMarketCard/EcoMarketCard";
import { Button } from "../../components/ui/Button/Button";
import currency from "../../svg-icons/currency.svg";
import styles from "./Ecomarket.module.scss";
import { FilterCheckboxes } from "../../containers/FilterCheckboxes/FilterCheckboxes";
import { ProductModel, Products } from "../../stores/ProductStore";
import { useEffect, useState } from "react";
import EcoMarketCardSkeleton from "../../components/Skeletons/EcoMarketCardSkeleton";

export const Ecomarket = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timing);
  }, []);

  useEffect(() => {
    setProducts(Products);
  }, []);

  useEffect(() => {
    setProducts(Products);
  }, []);

  const onGetPromocodeClick = () => {
    console.log("click");
  };

  const onButtonClick = () => {
    console.log("click");
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
              {loading ? <EcoMarketCardSkeleton /> : <>

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
              </>}
            </section>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
