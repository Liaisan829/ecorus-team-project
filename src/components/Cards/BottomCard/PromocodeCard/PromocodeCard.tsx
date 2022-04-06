import {Button} from "../../../ui/Button/Button";
import {useStores} from "../../../../utils/use-stores-hook";
import {QrModal} from "../../../Modals/QrModal/QrModal";
import currency from "../../../../svg-icons/currency.svg";
import styles from './PromocodeCard.module.scss';

const PromocodeCard = () => {
    const { modalStore: { setCurrentModal } } = useStores();

    const onGetPromocodeClick = () => {
        setCurrentModal(QrModal)
    }

    return (
        <div className={styles.promocodeCard}>
            <div className={styles.promocodeCard__info}>
                <div className={styles.promocodeCard__info__text}>
                    <div className={styles.promocodeCard__info__balance}>
                        <p>На вашем балансе</p>
                        <img src={currency} alt="currency"/>
                        <h6>200</h6>
                    </div>
                    <p>Вы можете обменять их на скидку 200 руб.</p>
                </div>
                <Button
                    type="submit"
                    onClick={onGetPromocodeClick}
                    theme={"green"}
                    children={"Получить промокод"}
                />
            </div>
        </div>
    );
};

export default PromocodeCard;