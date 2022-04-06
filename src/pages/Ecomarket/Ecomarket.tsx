import Footer from "../../components/Footer/Footer";
import {EcoMarketCard} from "../../components/Cards/EcoMarketCard/EcoMarketCard";
import {Button} from "../../components/ui/Button/Button";
import {FilterCheckboxes} from "../../containers/FilterCheckboxes/FilterCheckboxes";
import {ProductModel, Products} from "../../stores/ProductStore";
import {useEffect, useState} from "react";
import EcoMarketCardSkeleton from "../../components/Skeletons/EcoMarketCardSkeleton";
import PromocodeCard from "../../components/Cards/BottomCard/PromocodeCard/PromocodeCard";
import styles from "./Ecomarket.module.scss";


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


    const onButtonClick = () => {
        console.log("click");
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
                        {loading ? <EcoMarketCardSkeleton/> : <>
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
                        </>}
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
};
