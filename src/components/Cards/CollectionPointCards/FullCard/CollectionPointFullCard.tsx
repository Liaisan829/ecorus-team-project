import {FC} from "react";
import {NavLink} from "react-router-dom";
import {Icon} from "../../../ui/Icon/Icon";
import { CollPointsModel } from "../../../../stores/CollPointsStore";
import styles from './CollectionPointFullCard.module.scss';

interface Props{
    collectionPointFullCard: CollPointsModel;
}

const CollectionPointFullCard:FC<Props> = ({collectionPointFullCard}) => {
    return (
        <div className={styles.fullCard}>
            <NavLink to={'/collpoints'} className={styles.fullCard__back}>
                <Icon name={'back'} width={15} height={15}/>
                <p>Вернуться назад</p>
            </NavLink>
            <div className={styles.fullCard__card}>
                <img src={collectionPointFullCard.img} alt="card"/>
                <div className={styles.fullCard__card__info}>
                    <h3>{collectionPointFullCard.address}</h3>
                    <p>{collectionPointFullCard.phone}</p>
                    <div className={styles.fullCard__card__info__time}>
                        <p>{collectionPointFullCard.timetable}</p>
                    </div>
                    <h3>{collectionPointFullCard.shop}</h3>
                    <div className={styles.fullCard__card__info__items}>
                        {collectionPointFullCard.items.map(item => (
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