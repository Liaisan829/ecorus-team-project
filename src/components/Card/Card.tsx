import styles from "./Card.module.scss";
import { Button } from "../ui/Button/Button";
import { FC } from "react";

interface CardProps {
  bgColor: string,
  cardHeadline: string,
  cardText: string,
  type: string,
  buttonText: string,
  img: any
}

export const Card: FC<CardProps> = (props) => {

  const onServiceConditionClick = () => {
    //console.log("pressed the service condition button");
  };

  return (
    <>
      <div className={styles.section} style={{ "backgroundColor": `${props.bgColor}` }}>
        <div className={styles.section__info}>
          <h1>{props.cardHeadline}</h1>
          <p>{props.cardText}</p>
          <Button
            type={props.type}
            onClick={onServiceConditionClick}
            buttonText={props.buttonText}
            buttonColor={"#07C88E"} />
        </div>
        <img src={props.img} alt="serviceCondition" />
      </div>
    </>
  );
};