import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {Button} from "../../ui/Button/Button";
import {qrGenerator} from "./QrGenerator";
import QRCode from 'react-qr-code';
import styles from './QrModal.module.scss';


export const QrModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();
    const article = qrGenerator();

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__popup}>
                <h2>QR-код на покупку создан</h2>
                <p>При оплате покажите его сотруднику на кассе</p>
                <div className={styles.overlay__popup__qrcode}>
                    <QRCode value={'http://localhost:3001/ecomarket'}/>
                    <h2>{article}</h2>
                </div>
                <p>Если не получается отсканировать QR-код, введите код вручную или продиктуйте сотруднику на кассе</p>
                <Button
                    type="button"
                    onClick={clearCurrentModal}
                    theme="green"
                >Закрыть</Button>
            </div>
        </div>
    );
});