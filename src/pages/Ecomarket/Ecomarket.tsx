import { useEffect, useState } from "react";
import { useStores } from "../../utils/use-stores-hook";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { EcoMarketCard } from "../../components/EcoMarketCard/EcoMarketCard";
import { Button } from "../../components/ui/Button/Button";
import { CheckboxNew } from "../../components/ui/CheckboxNew/CheckboxNew";
import { QrModal } from "../../components/Modals/QrModal/QrModal";
import { Genders, GoodsType, Brands, CheckboxModel } from "../../stores/CheckboxStore";
import sneak1 from "../../svg-icons/ecoMarket/sneak1.svg";
import sneak2 from "../../svg-icons/ecoMarket/sneak2.svg";
import sneak3 from "../../svg-icons/ecoMarket/sneak3.svg";
import sneak4 from "../../svg-icons/ecoMarket/sneak4.svg";
import hoodie from "../../svg-icons/ecoMarket/hoodie.svg";
import currency from "../../svg-icons/currency.svg";
import styles from "./Ecomarket.module.scss";

const onGetPromocodeClick = () => {
  console.log("click");
};

const onButtonClick = () => {
  console.log("click");
};

export const Ecomarket = () => {

  const { modalStore: { setCurrentModal } } = useStores();
  const [isCheck, setIsCheck] = useState<number[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [genders, setGenders] = useState<Array<CheckboxModel>>([]);
  const [goodsType, setGoodsType] = useState<Array<CheckboxModel>>([]);
  const [brands, setBrands] = useState<Array<CheckboxModel>>([]);

  useEffect(() => {
    setGenders(Genders);
    setGoodsType(GoodsType);
    setBrands(Brands);
  }, [genders, goodsType, brands]);

  const onGetQRGet = () => {
    setCurrentModal(QrModal);
  };

  const handleSelectAll = () => {
    console.log("dd")
    setIsCheckedAll(!isCheckedAll);
    setIsCheck(goodsType.map(li => li.id));
    if (isCheckedAll) {
      setIsCheck([]);
    }
  };

  const handleSelect = (e:any) => {
    const {id, isChecked} = e.target;
    console.log("s");
    setIsCheck([...isCheck, id]);
    if(!isChecked){
      setIsCheck(isCheck.filter(item => item !== id))
    }
  }

  return (
    <>
      <BaseLayout>
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
          <form className={styles.filter__block}>

            <h3>Пол</h3>

            {genders.map((gender) => (
              <CheckboxNew
                isChecked={isCheck.includes(gender.id)}
                id={gender.id}
                text={gender.text}
                handleClick={handleSelect}
              />
            ))}

            <h3>Тип товара</h3>

            <CheckboxNew
              isChecked={isCheckedAll}
              id={1}
              text={"Выбрать все"}
              handleClick={handleSelectAll}
            />

            {goodsType.map((goodsType) => (
              <CheckboxNew
                isChecked={isCheck.includes(goodsType.id)}
                id={goodsType.id}
                text={goodsType.text}
                handleClick={handleSelect}
              />
            ))}

            <h3>Брэнд</h3>

            <CheckboxNew
              isChecked={isCheckedAll}
              id={1}
              text={"Выбрать все"}
              handleClick={handleSelectAll}
            />

            {brands.map((brand) => (
              <CheckboxNew
                isChecked={isCheck.includes(brand.id)}
                id={brand.id}
                text={brand.text}
                handleClick={handleSelect}
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
          <EcoMarketCard
            brand={"NIKE"}
            img={sneak1}
            name={"Nike Air Max 2021"}
            gender={"Мужская обувь"}
            price={"1000"}
            onClick={onGetQRGet}
          />
          <EcoMarketCard
            brand={"NIKE"}
            img={sneak2}
            name={"Nike Air Max 90 Premium"}
            gender={"Мужская обувь"}
            price={"750"}
            onClick={onGetQRGet}
          />
          <EcoMarketCard
            brand={"Adidas"}
            img={sneak3}
            name={"Adidas Alphabounce RC"}
            gender={"Мужская обувь"}
            price={"1200"}
            onClick={onGetQRGet}
          />
          <EcoMarketCard
            brand={"H&M"}
            img={hoodie}
            name={"Nike Air Max 2021"}
            gender={"Мужская обувь"}
            price={"1000"}
            onClick={onGetQRGet}
          />
          <EcoMarketCard
            brand={"NIKE"}
            img={sneak4}
            name={"Nike Air Force 1 Low"}
            gender={"Мужская обувь"}
            price={"2100"}
            onClick={onGetQRGet}
          />
        </section>
      </BaseLayout>
    </>
  );
};