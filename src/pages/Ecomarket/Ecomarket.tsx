import Footer from "../../components/Footer/Footer";
import {EcoMarketCard} from "../../components/Cards/EcoMarketCard/EcoMarketCard";
import {Button} from "../../components/ui/Button/Button";
import {FilterCheckboxes} from "../../containers/FilterCheckboxes/FilterCheckboxes";
import {ProductModel, Products} from "../../stores/ProductStore";
import {useEffect, useState} from "react";
import EcoMarketCardSkeleton from "../../components/Skeletons/EcoMarketCardSkeleton";
import PromocodeCard from "../../components/Cards/PromocodeCard/PromocodeCard";
import styles from "./Ecomarket.module.scss";
import axios from "axios";

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

    const getItems = () => {
        axios.get("market", {
            params: {
                page_number: 2,
                page_size: 10,
                sexes: `["WOMAN"]`,
                item_categories: `["SHOES"]`,
                shop_ids: `["ec4e2c1d-a495-4010-bbf9-67fc99c8be28"]`
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    const onButtonClick = () => {
        getItems();
    };

    return (
        <>
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
                        <FilterCheckboxes/>
                    </div>

                    <section className={styles.productCards}>
                        {loading ?
                            <>
                                <EcoMarketCardSkeleton/>
                                {products.map(product => (
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
            <Footer/>
        </>
    );
};