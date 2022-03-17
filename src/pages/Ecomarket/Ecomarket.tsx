import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import styles from './Ecomarket.module.scss';
import {EcoMarketCard} from "../../components/EcoMarketCard/EcoMarketCard";
import sneak1 from '../../svg-icons/ecoMarket/sneak1.svg';
import sneak2 from '../../svg-icons/ecoMarket/sneak2.svg';
import sneak3 from '../../svg-icons/ecoMarket/sneak3.svg';
import sneak4 from '../../svg-icons/ecoMarket/sneak4.svg';
import hoodie from '../../svg-icons/ecoMarket/hoodie.svg';

export const Ecomarket = () => {
    return (
        <>
            <BaseLayout>
                <section className={styles.productCards}>
                    <EcoMarketCard
                        brand={"NIKE"}
                        img={sneak1}
                        name={"Nike Air Max 2021"}
                        gender={"Мужская обувь"}
                        price={"1000"}
                    />
                    <EcoMarketCard
                        brand={"NIKE"}
                        img={sneak2}
                        name={"Nike Air Max 90 Premium"}
                        gender={"Мужская обувь"}
                        price={"750"}
                    />
                    <EcoMarketCard
                        brand={"Adidas"}
                        img={sneak3}
                        name={"Adidas Alphabounce RC"}
                        gender={"Мужская обувь"}
                        price={"1200"}
                    />
                    <EcoMarketCard
                        brand={"H&M"}
                        img={hoodie}
                        name={"Nike Air Max 2021"}
                        gender={"Мужская обувь"}
                        price={"1000"}
                    />
                    <EcoMarketCard
                        brand={"NIKE"}
                        img={sneak4}
                        name={"Nike Air Force 1 Low"}
                        gender={"Мужская обувь"}
                        price={"2100"}
                    />
                    <EcoMarketCard
                        brand={"NIKE"}
                        img={sneak4}
                        name={"Nike Air Force 1 Low"}
                        gender={"Мужская обувь"}
                        price={"2100"}
                    />
                </section>
            </BaseLayout>
        </>
    )
}