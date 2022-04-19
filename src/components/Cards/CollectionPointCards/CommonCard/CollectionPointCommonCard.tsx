import {FC} from "react";
import styles from './CollectionPointCard.module.scss';

export interface Props {
    id: number,
    img: any,
    address: string,
    description: string
}

const CollectionPointCommonCard:FC<Props> = ({img, address, description, id}) => {
    return (
        <>
                <div className={styles.collectionCard}>
                    <img src={img} alt="pic"/>
                    <div className={styles.collectionCard__info}>
                        <h3>{address}</h3>
                        <p>{description}</p>
                    </div>
                </div>
        </>
    );
};

export default CollectionPointCommonCard;