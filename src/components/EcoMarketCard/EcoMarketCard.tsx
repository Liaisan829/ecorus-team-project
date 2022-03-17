import {FC} from 'react';
import styles from './EcoMarketCard.module.scss';
import {Icon} from "../ui/Icon/Icon";

interface CardProps {
    brand: string
    img: any,
    name: string
    gender: string,
    price: string
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
                <Icon name="currency" width={24} height={24}/>
                <p>{price}</p>
            </div>

        </div>
    )
}