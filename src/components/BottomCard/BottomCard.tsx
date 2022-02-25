import { FC } from "react";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/Icon/Icon";
import styles from "./BottomCard.module.scss";

interface BottomCardProps {
  cardHeadline: string,
  cardText: string,
  type: string,
  img: any
}

export const BottomCard: FC<BottomCardProps> = (props) => {

  const onBottomButtonClick = () => {
    // console.log("click")
  };

  return (
    <>
      <div className={styles.informBlock}>
        <div className={styles.informBlock__info}>
          <h1>{props.cardHeadline}</h1>
          <p>{props.cardText}</p>
          <div className={styles.cardButton}>
            <Button
              type={props.type}
              onClick={onBottomButtonClick}
              buttonColor={"rgba(0, 0, 0, 0.12)"}
              buttonImg={<Icon name="buttonArrow" width="24" height="24" />}
            />
          </div>
        </div>
        <img src={props.img} alt="image" />
      </div>
    </>
  );
};