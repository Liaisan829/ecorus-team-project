import styles from './PromoCard.module.scss';
import {FC} from "react";
import {Button} from "../../ui/Button/Button";
import {useStores} from "../../../utils/use-stores-hook";
import {QrModal} from "../../Modals/QrModal/QrModal";

interface Props {
    price: string,
    date: string,
    link: string
}

const PromoCard: FC<Props> = ({price, date, link}) => {
    const { modalStore: { setCurrentModal } } = useStores();

    const onGetPromocodeClick = () => {
        setCurrentModal(QrModal);
    };

    return (
        <div className={styles.promoCard}>
            <div className={styles.promoCard__price}>
                <h2>{price}</h2>
            </div>
            <div className={styles.promoCard__info}>
                <div className={styles.promoCard__info__item}>
                    <p>Дата создания</p>
                    <h5>{date}</h5>
                </div>
                <div className={styles.promoCard__info__item}>
                    <p>Ссылка на товар</p>
                    <h5 className={styles.greenLink}>{link}</h5>
                </div>
            </div>
            <Button
                type={'button'}
                theme={'grey'}
                onClick={onGetPromocodeClick}
            >Показать qr-код</Button>
        </div>
    );
};

export default PromoCard;