import { useStores } from "../../utils/use-stores-hook";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { EcoMarketCard } from "../../components/EcoMarketCard/EcoMarketCard";
import { Button } from "../../components/ui/Button/Button";
import { Checkbox } from "../../components/ui/Checkbox/Checkbox";
import { QrModal } from "../../components/Modals/QrModal/QrModal";
import sneak1 from "../../svg-icons/ecoMarket/sneak1.svg";
import sneak2 from "../../svg-icons/ecoMarket/sneak2.svg";
import sneak3 from "../../svg-icons/ecoMarket/sneak3.svg";
import sneak4 from "../../svg-icons/ecoMarket/sneak4.svg";
import hoodie from "../../svg-icons/ecoMarket/hoodie.svg";
import currency from "../../svg-icons/currency.svg";
import styles from "./Ecomarket.module.scss";
import { useState } from "react";

interface CheckboxModel {
  name: string,
  isChecked: boolean
}

const genders: Array<CheckboxModel> = [
  { name: "Мужской", isChecked: false },
  { name: "Женский", isChecked: false }
];

const goodsType: Array<CheckboxModel> = [
  { name: "Одежда", isChecked: false },
  { name: "Обувь", isChecked: false },
  { name: "Аксессуары", isChecked: false }
];

const brands: Array<CheckboxModel> = [
  { name: "H&M", isChecked: false },
  { name: "P&B", isChecked: false },
  { name: "Adidas", isChecked: false },
  { name: "Nike", isChecked: false },
  { name: "Rebook", isChecked: false }
];

export const Ecomarket = () => {

  const { modalStore: { setCurrentModal } } = useStores();
  const [checkedAll, setCheckedAll] = useState<boolean>(false);
  const [products, setProducts] = useState([]);

  const onGetPromocodeClick = () => {
    console.log("click");
  };

  const onButtonClick = () => {
    console.log("click");
  };

  const onGetQRGet = () => {
    setCurrentModal(QrModal);
  };

  // const checkAllHandler = (event: any) => {
  //   goodsType.map(goodType => {
  //       goodType.isChecked = event.target.checked;
  //       setCheckedAll(goodType.isChecked);
  //     });
  // };

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

          <h3>Пол</h3>

          {genders.map((gender) => (
            <Checkbox
              key={gender.name}
              text={gender.name}
            />
          ))}

          <h3>Тип товара</h3>

          <Checkbox
            text={"Выбрать все"}
          />

          {goodsType.map((goodType) => (
            <Checkbox
              key={goodType.name}
              text={goodType.name}
            />
          ))}

          <h3>Брэнд</h3>

          <Checkbox
            text={"Выбрать все"}
          />

          {brands.map((brand) => (
            <Checkbox
              key={brand.name}
              text={brand.name}
            />
          ))}
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
