import {Icon} from "../../ui/Icon/Icon";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__container}>

                <div className={styles.footer__contact}>
                    <Icon name="letter" width="24" height="24"/>
                    <a href="mailto:info@ecorus.ru">info@ecorus.ru</a>
                </div>

                <div className={styles.footer__contact}>
                    <Icon name="phone" width="24" height="24"/>
                    <a href="tel:+78008808888">+7(800) 880-88-88</a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;