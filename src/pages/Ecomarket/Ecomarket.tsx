import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {EcoMarketCard} from "../../components/EcoMarketCard/EcoMarketCard";
import sneak1 from '../../svg-icons/ecoMarket/sneak1.svg';
import sneak2 from '../../svg-icons/ecoMarket/sneak2.svg';
import sneak3 from '../../svg-icons/ecoMarket/sneak3.svg';
import sneak4 from '../../svg-icons/ecoMarket/sneak4.svg';
import hoodie from '../../svg-icons/ecoMarket/hoodie.svg';
import currency from '../../svg-icons/currency.svg';
import styles from './Ecomarket.module.scss';
import {Button} from "../../components/ui/Button/Button";

const onGetPtomocodeClick = () => {
    console.log("click")
}

export const Ecomarket = () => {
    return (
        <>
            <BaseLayout>
                <section className={styles.productCards}>
                    <div className={styles.promocodeCard}>
                        <div className={styles.promocodeCard__info}>
                            <div className={styles.promocodeCard__info__text}>
                                <div className={styles.promocodeCard__info__balance}>
                                    <p>На вашем балансе</p>
                                    <img src={currency} alt="currency"/>
                                    <h6>200</h6>
                                </div>
                                <p>Вы можете обменять их на скидку 200 руб.</p>
                            </div>
                            <Button
                                type="submit"
                                onClick={onGetPtomocodeClick}
                                theme={"green"}
                                children={"Получить промокод"}
                            />
                        </div>
                    </div>
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
                </section>
            </BaseLayout>
        </>
    )
}