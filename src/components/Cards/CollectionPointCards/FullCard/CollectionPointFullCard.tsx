import styles from './CollectionPointFullCard.module.scss';
import {FC} from "react";
import {NavLink} from "react-router-dom";
import {Icon} from "../../../ui/Icon/Icon";

interface Props {
    id: number
    img: any,
    address: string,
    phone: string,
    timetable: string[],
    shop: string,
    items: string[]
}

const CollectionPointFullCard:FC<Props> = ({img, address, phone, timetable, shop, items, id}) => {
    return (
        <div className={styles.fullCard}>
            <NavLink to={'/collpoints'} className={styles.fullCard__back}>
                <Icon name={'back'} width={15} height={15}/>
                <p>Вернуться назад</p>
            </NavLink>
            <div className={styles.fullCard__card}>
                <img src={img} alt="card"/>
                <div className={styles.fullCard__card__info}>
                    <h3>{address}</h3>
                    <p>{phone}</p>
                    <div className={styles.fullCard__card__info__time}>
                        <p>{timetable}</p>
                    </div>
                    <h3>{shop}</h3>
                    <div className={styles.fullCard__card__info__items}>
                        {items.map(item => (
                            <div className={styles.fullCard__card__info__item}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionPointFullCard;