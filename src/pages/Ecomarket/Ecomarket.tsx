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

const onGetPromocodeClick = () => {
  console.log("click");
};

const onButtonClick = () => {
  console.log("click");
};

export const Ecomarket = () => {

  const { modalStore: { setCurrentModal } } = useStores();
  const [checked, setChecked] = useState<boolean>(false);

  // const { checkboxStore: { genders, goodsType, brands } } = useStores();

  interface CheckboxModel {
    name: string,
    isChecked: boolean
  }

  const goodsType: Array<CheckboxModel> = [
    { name: "Одежда", isChecked: false },
    { name: "Обувь", isChecked: false },
    { name: "Аксессуары", isChecked: false }
  ];

  const checkOneHandler = (event: any) => {
    // goodsType.filter(goodType => goodType.name === event.target.value).map(filteredCheckbox => {
    //   filteredCheckbox.isChecked = event.target.checked
    //   setChecked(filteredCheckbox.isChecked);
    //   console.log(filteredCheckbox, filteredCheckbox.isChecked, checked);
    // });

    console.log(event.target.checked);
    setChecked(event.target.checked);
    console.log(checked);
  };

  const checkAllHandler = (event: any) => {
    goodsType.map((goodType => {
      goodType.isChecked = event.target.checked;
    }));
  };

  const onGetQRGet = () => {
    setCurrentModal(QrModal);
  };

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
          {/*<form className={styles.filter__block}>*/}

          {/*  <h3>Пол</h3>*/}

          {/*  {genders.map((gender) => (*/}
          {/*    <CheckboxNew*/}
          {/*      text={gender.text}*/}
          {/*    />*/}
          {/*  ))}*/}

          {/*  <h3>Тип товара</h3>*/}

          {/*  <CheckboxNew*/}
          {/*    text={"Выбрать все"}*/}
          {/*  />*/}

          {/*  {goodsType.map((goodsType) => (*/}
          {/*    <CheckboxNew*/}
          {/*      text={goodsType.text}*/}
          {/*    />*/}
          {/*  ))}*/}

          {/*  <h3>Брэнд</h3>*/}

          {/*  <CheckboxNew*/}
          {/*    text={"Выбрать все"}*/}
          {/*  />*/}

          {/*  {brands.map((brand) => (*/}
          {/*    <CheckboxNew*/}
          {/*      text={brand.text}*/}
          {/*    />*/}
          {/*  ))}*/}

          {/*</form>*/}

          <h3>Тип товара</h3>

          <Checkbox
            checked={false}
            onChange={checkAllHandler}
            text={"Выбрать все"}
          />

          <Checkbox
            checked={checked}
            onChange={checkOneHandler}
            text={"Одежда"}
          />

          <Checkbox
            checked={checked}
            onChange={checkOneHandler}
            text={"Обувь"}
          />

          <Checkbox
            checked={checked}
            onChange={checkOneHandler}
            text={"Аксессураы"}
          />

          {/*{goodsType.map((goodsType) => (*/}
          {/*  <Checkbox*/}
          {/*    text={goodsType.name}*/}
          {/*    checked={checked}*/}
          {/*    onChange={checkOneHandler}*/}
          {/*  />*/}
          {/*))}*/}

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
