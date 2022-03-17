import {FC} from 'react';
import styles from './EcoMarketCard.module.scss';
import currency from '../../svg-icons/currency.svg';

interface CardProps {
    brand: string
    img: any,
    name: string
    gender: string,
    price: string,

}

export const EcoMarketCard: FC<CardProps> = ({brand, img, name, gender, price}) => {
    return (
        <div className={styles.section}>
            <div className={styles.section__brand}>
                <p>{brand}</p>
            </div>
            <img src={img} alt="item"/>
            <div className={styles.section__text}>
                <h6>{name}</h6>
                <p>{gender}</p>
            </div>
            <div className={styles.section__price}>
                <img src={currency} alt="currency"/>
                <p>{price}</p>
            </div>
        </div>
    )
}