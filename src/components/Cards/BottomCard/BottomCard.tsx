import { FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../ui/Button/Button";
import { Icon } from "../../ui/Icon/Icon";
import styles from "./BottomCard.module.scss";

interface BottomCardProps {
  cardHeadline: string,
  cardText: string,
  img: any,
  path: string
}

export const BottomCard: FC<BottomCardProps> = ({ cardHeadline, cardText, img, path }) => {

  const navigate = useNavigate();

  const onBottomButtonClick = () => {
    navigate(path);
  };

  return (
    <div className={styles.informBlock}>
      <div className={styles.informBlock__info}>
        <div className={styles.informBlock__info__text}>
          <h1>{cardHeadline}</h1>
          <p>{cardText}</p>
        </div>
        <div className={styles.informBlock__info__cardButton}>
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
  );
};