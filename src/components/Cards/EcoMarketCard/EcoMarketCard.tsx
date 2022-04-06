import { FC } from "react";
import { Button } from "../../ui/Button/Button";
import currency from "../../../svg-icons/currency.svg";
import styles from "./EcoMarketCard.module.scss";
import {useStores} from "../../../utils/use-stores-hook";
import {QrModal} from "../../Modals/QrModal/QrModal";

interface CardProps {
  brand: string
  img: any,
  name: string
  gender: string,
  price: string,
}


export const EcoMarketCard: FC<CardProps> = ({ brand, img, name, gender, price}) => {
    const { modalStore: { setCurrentModal } } = useStores();

    const onOpenQrCodeModal = () => {
        setCurrentModal(QrModal)
    }

  return (
    <div className={styles.section}>
      <div className={styles.section__brand}>
        <p>{brand}</p>
      </div>

      <Button type="button" onClick={onOpenQrCodeModal} theme="">
        <img className = {styles.section__img} src={img} alt="item" />
      </Button>

      <div className={styles.section__text}>
        <h6>{name}</h6>
        <p>{gender}</p>
      </div>

      <div className={styles.section__price}>
        <img src={currency} alt="currency" />
        <p>{price}</p>
      </div>
    </div>
  );
};