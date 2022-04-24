import {useEffect, useState} from "react";
import {EcoMarketCard} from "../../components/Cards/EcoMarketCard/EcoMarketCard";
import {Button} from "../../components/ui/Button/Button";
import {FilterCheckboxes} from "../../containers/FilterCheckboxes/FilterCheckboxes";
import Footer from "../../components/Layout/Footer/Footer";
import {ProductModel, Products} from "../../stores/ProductStore";
import EcoMarketCardSkeleton from "../../components/Skeletons/EcoMarketCardSkeleton";
import PromocodeCard from "../../components/Cards/PromocodeCard/PromocodeCard";
import {SortingButtons} from "../../containers/SortingButtons/SortingButtons";
import {EcomarketBottomSheet} from "../../containers/EcomarketBottomSheet/EcomarketBottomSheet";
import {BaseLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import "react-spring-bottom-sheet/dist/style.css";
import styles from "./Ecomarket.module.scss";

export const Ecomarket = () => {
    const [products, setProducts] = useState<Array<ProductModel>>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
        setIsOpen(!isOpen);
    };

    return (
        <>
            <BaseLayout>
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
                            <SortingButtons/>
                        </div>
                    </div>

                    <div className={styles.ecomarket__content}>
                        <div className={styles.ecomarket__content__filter}>
                            <FilterCheckboxes/>
                        </div>

                        <section className={styles.productCards}>
                            {loading ?
                                <>
                                    <EcoMarketCardSkeleton/>
                                    {products.map(() => (
                                        <EcoMarketCardSkeleton/>
                                    ))}
                                </>
                                :
                                <>
                                    <PromocodeCard/>
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
                <EcomarketBottomSheet isOpen={isOpen}/>
            </BaseLayout>
            <Footer/>
        </>
    );
};