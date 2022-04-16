import styles from './historyCard.module.scss';
import {FC} from "react";
import currency from '../../../svg-icons/currency.svg';

interface Props {
    address: string,
    material: string,
    date: string,
    price: string
}

const HistoryCard: FC<Props> = ({address, material, date, price}) => {
    return (
        <div className={styles.historyCard}>
            <div className={styles.historyCard__info}>
                <div className={styles.historyCard__info__item}>
                    <p>Адрес</p>
                    <h5>{address}</h5>
                </div>
                <div className={styles.historyCard__info__item}>
                    <p>Материал</p>
                    <h5>{material}</h5>
                </div>
                <div className={styles.historyCard__info__item}>
                    <p>Дата</p>
                    <h5>{date}</h5>
                </div>
            </div>
            <div className={styles.historyCard__price}>
                <img src={currency} alt={'currency'}/>
                <h4>{price}</h4>
            </div>
        </div>
    );
};

export default HistoryCard;