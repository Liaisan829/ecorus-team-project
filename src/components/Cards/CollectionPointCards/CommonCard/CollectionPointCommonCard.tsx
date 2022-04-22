import { FC } from "react";
import styles from "./CollectionPointCommonCard.module.scss";

export interface Props {
  img: any,
  address: string,
  description: string
}

const CollectionPointCommonCard: FC<Props> = ({ img, address, description }) => {
  return (
    <>
      <div className={styles.collectionCard}>
        <img src={img} alt="pic" />
        <div className={styles.collectionCard__info}>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default CollectionPointCommonCard;