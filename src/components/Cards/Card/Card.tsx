import { FC } from "react";
import { Button } from "../../ui/Button/Button";
import styles from "./Card.module.scss";

interface CardProps {
  bgColor: string,
  cardHeadline: string,
  cardText: string,
  type: string,
  buttonText: string,
  img: any
}

export const Card: FC<CardProps> = ({ cardText, cardHeadline, buttonText, img, type, bgColor }) => {

  const onServiceConditionClick = () => {
    //console.log("pressed the service condition button");
  };

  return (
    <>
      <div className={styles.section} style={{ "backgroundColor": `${bgColor}` }}>
        <div className={styles.section__info}>
          <h1>{cardHeadline}</h1>
          <p>{cardText}</p>
          <Button
            type={type}
            onClick={onServiceConditionClick}
            disabled={false}
            theme={"green"}
            children={buttonText} />
        </div>
        <img src={img} alt="serviceCondition" />
      </div>
    </>
  );
};