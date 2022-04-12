import Footer from "../../components/Footer/Footer";
import { EcoMarketCard } from "../../components/Cards/EcoMarketCard/EcoMarketCard";
import { Button } from "../../components/ui/Button/Button";
import { FilterCheckboxes } from "../../containers/FilterCheckboxes/FilterCheckboxes";
import { ProductModel, Products } from "../../stores/ProductStore";
import { useEffect, useState } from "react";
import EcoMarketCardSkeleton from "../../components/Skeletons/EcoMarketCardSkeleton";
import PromocodeCard from "../../components/Cards/PromocodeCard/PromocodeCard";
import styles from "./Ecomarket.module.scss";
import { SortingButtons } from "../../containers/SortingButtons/SortingButtons";
import { EcomarketBottomSheet } from "../../containers/EcomarketBottomSheet/EcomarketBottomSheet";
import "react-spring-bottom-sheet/dist/style.css";

export const Ecomarket = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProducts(Products);

    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timing);

  }, []);

  const onFilterClick = () => {
    console.log("filter clicked");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ecomarket}>
          <h1>ЭкоМаркет</h1>
          <div className={styles.ecomarket__mobileFilter}>
            <Button
              type={"button"}
              theme={"grey"}
              onClick={onFilterClick}
              children={"Фильтры"}
            />
          </div>

          <div className={styles.sortingButtons}>
            <SortingButtons />
          </div>
        </div>

        <div className={styles.ecomarket__content}>
          <FilterCheckboxes />

          <section className={styles.productCards}>
            {loading ?
              <>
                <EcoMarketCardSkeleton />
                {products.map(product => (
                  <EcoMarketCardSkeleton />
                ))}
              </>
              :
              <>
                <PromocodeCard />
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
              </>
            }
          </section>
        </div>
      </div>
      <EcomarketBottomSheet />
      <Footer />
    </>
  );
};