import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { Slider } from "../../components/Swiper/Slider";
import { BottomCard } from "../../components/BottomCard/BottomCard";
import collpoints from "../../svg-icons/collpoints.svg";
import styles from "./MainPage.module.scss";
import ecomarket from "../../svg-icons/ecomarket.svg";

export const MainPage = () => {

  return (
    <BaseLayout>
      <Slider />
      <div className={styles.cardsFlex}>
        <BottomCard
          cardHeadline="Пункты сбора"
          cardText="Посмотри, где в твоем городе можно сдать вторсырье на переработку"
          type="button"
          img={collpoints} />
        <BottomCard
          cardHeadline="Экомаркет"
          cardText="Используй заработанные экокоины для покупки товаров из переработанных материалов "
          type="button"
          img={ecomarket} />
      </div>
    </BaseLayout>
  );
};