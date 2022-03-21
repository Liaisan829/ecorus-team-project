import { observer } from "mobx-react";
import { useStores } from "../../utils/use-stores-hook";
import { Checkbox } from "../../components/ui/Checkbox/Checkbox";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {EcoMarketCard} from "../../components/EcoMarketCard/EcoMarketCard";
import {Button} from "../../components/ui/Button/Button";
import sneak1 from '../../svg-icons/ecoMarket/sneak1.svg';
import sneak2 from '../../svg-icons/ecoMarket/sneak2.svg';
import sneak3 from '../../svg-icons/ecoMarket/sneak3.svg';
import sneak4 from '../../svg-icons/ecoMarket/sneak4.svg';
import hoodie from '../../svg-icons/ecoMarket/hoodie.svg';
import currency from '../../svg-icons/currency.svg';
import styles from './Ecomarket.module.scss';

const onGetPromocodeClick = () => {
    console.log("click");
}

const onButtonClick = () => {
  console.log("click");
}

export const Ecomarket = observer(() => {
    const {checkboxStore: {genders, goodsType, brands}} = useStores();
    return (
        <>
            <BaseLayout>
                <div className={styles.ecomarket}>
                    <h1>ЭкоМаркет</h1>
                    <div className={styles.ecomarket__filterButtons}>
                        <Button
                          type={"button"}
                          theme={"grey"}
                          onClick={onButtonClick}
                          children={"По популярности"}
                        />

                        <Button
                          type={"button"}
                          theme={"grey"}
                          onClick={onButtonClick}
                          children={"По цене"}
                        />

                        <Button
                          type={"button"}
                          theme={"grey"}
                          onClick={onButtonClick}
                          children={"По новизне"}
                        />
                    </div>
                </div>

                <aside className={styles.filter}>
                    <form className={styles.filter__block}>
                        <h3>Пол</h3>
                        {genders.map((gender, index)=>(
                            <Checkbox
                              id={index}
                              text={gender.text}
                              // onCheckboxClick={}
                              clicked={gender.clicked}
                            />
                        ))}

                        <h3>Тип товара</h3>
                        {goodsType.map((goodType, index)=>(
                          <Checkbox
                            id={index}
                            text={goodType.text}
                            // onCheckboxClick={}
                            clicked={goodType.clicked}
                          />
                        ))}

                        <h3>Брэнд</h3>
                        {brands.map((brand, index)=>(
                          <Checkbox
                            id={index}
                            text={brand.text}
                            // onCheckboxClick={}
                            clicked={brand.clicked}
                          />
                        ))}
                    </form>
                </aside>

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
                                onClick={onGetPromocodeClick}
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
})