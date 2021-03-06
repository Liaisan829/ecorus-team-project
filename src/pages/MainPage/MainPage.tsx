import { Slider } from "../../components/Swiper/Slider";
import { BaseLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { BottomCard } from "../../components/Cards/BottomCard/BottomCard";
import ecomarket from "../../svg-icons/ecomarket.svg";
import collpoints from "../../svg-icons/collpoints.svg";
import styles from "./MainPage.module.scss";

export const MainPage = () => {

  return (
    <BaseLayout>
      <div className={styles.container}>
        <Slider />
        <div className={styles.cardsFlex}>
          <BottomCard
            cardHeadline="Пункты сбора"
            cardText="Посмотри, где в твоем городе можно сдать вторсырье на переработку"
            img={collpoints}
            path={"/collpoints"}
          />
          <BottomCard
            cardHeadline="Экомаркет"
            cardText="Используй заработанные экокоины для покупки товаров из переработанных материалов "
            img={ecomarket}
            path={"/ecomarket"}
          />
        </div>
      </div>
    </BaseLayout>
  );
};