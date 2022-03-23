import { FC } from "react";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/Icon/Icon";
import styles from "./BottomCard.module.scss";

interface BottomCardProps {
  cardHeadline: string,
  cardText: string,
  img: any
}

export const BottomCard: FC<BottomCardProps> = ({cardHeadline, cardText, img}) => {

  const onBottomButtonClick = () => {
    // console.log("click")
  };

  return (
    <>
      <div className={styles.informBlock}>
        <div className={styles.informBlock__info}>
          <h1>{cardHeadline}</h1>
          <p>{cardText}</p>
          <div className={styles.cardButton}>
            <Button
              type="button"
              onClick={onBottomButtonClick}
              theme="grey"
              disabled={false}
            >
              <Icon name="buttonArrow" width="24" height="24" />
            </Button>
          </div>
        </div>
        <img src={img} alt="image" />
      </div>
    </>
  );
};