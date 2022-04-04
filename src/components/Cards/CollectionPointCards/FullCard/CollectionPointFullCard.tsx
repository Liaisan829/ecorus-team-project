import styles from './CollectionPointFullCard.module.scss';
import {FC} from "react";

interface Props {
    img: any,
    address: string,
    phone: string,
    timetable: string,
    shop: string,
    items: string[]
}

const CollectionPointFullCard:FC<Props> = ({img, address, phone, timetable, shop, items}) => {
    return (
        <div className={styles.fullCard}>
            <img src={img} alt="pic"/>
            <h3>{address}</h3>
            <p>{phone}</p>
            <p>{timetable}</p>
            <h3>{shop}</h3>
            <h4>{items}</h4>
        </div>
    );
};

export default CollectionPointFullCard;