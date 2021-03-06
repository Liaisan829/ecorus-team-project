import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Navigation } from "swiper";
import "swiper/scss/navigation";
import { Card } from "../Cards/Card/Card";
import { Icon } from "../ui/Icon/Icon";
import serviceCondition from "../../svg-icons/serviceCondition.svg";
import plastic from "../../svg-icons/plastic.svg";
import masks from "../../svg-icons/masks.svg";
import "swiper/scss";
import "./Slider.scss";

export const Slider = () => {

  SwiperCore.use([Navigation]);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className="slider">
        <div className="navigation">
          <div className="swiper-button-prev-custom">
            <Icon name="prev-arrow" width={24} height={24} />
          </div>
          <div className="swiper-button-next-custom">
            <Icon name="next-arrow" width={24} height={24} />
          </div>
        </div>

        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom"
          }}
          loop={true}
          autoplay={true}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          <SwiperSlide>
            <Card
              cardHeadline="Сделаем мир чище"
              cardText="Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"
              type="button"
              buttonText="Условия сервиса"
              img={serviceCondition}
              bgColor={"#B3EDC8"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              cardHeadline="А вы знали...."
              cardText="что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?"
              type="button"
              buttonText="Узнать больше"
              img={plastic}
              bgColor={"#FFE48F"}

            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              cardHeadline="Что с масками?"
              cardText="Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку."
              type="button"
              buttonText="Пункты сбора масок"
              img={masks}
              bgColor={"#BFF0DE"}
            />
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  )
    ;
};