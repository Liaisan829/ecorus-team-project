import {useStores} from "../../../utils/use-stores-hook";
import {NavLink} from "react-router-dom";
import {Button} from "../../ui/Button/Button";
import {CustomLink} from "../../ui/СustomLink/CustomLink";
import {LoginModal} from "../../Modals/LoginModal/LoginModal";
import {Icon} from "../../ui/Icon/Icon";
import currency from "../../../svg-icons/currency.svg";
import profile from "../../../svg-icons/profile.svg";
import logo from "../../../svg-icons/logo.svg";
import styles from "./Header.module.scss";


const Header = () => {
    const {modalStore: {setCurrentModal}} = useStores();

    const openModal = () => {
        setCurrentModal(LoginModal);
    };

    return (
        <header className={styles.header}>
            <section className={styles.header__container}>
                <nav>
                    <NavLink to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>

                    <CustomLink to="/" className={styles.link}>Главная</CustomLink>
                    <CustomLink to="/collpoints" className={styles.link}>Пункты сбора</CustomLink>
                    <CustomLink to="/ecomarket" className={styles.link}>ЭкоМаркет</CustomLink>
                    <CustomLink to="/aboutservice" className={styles.link}>О сервисе</CustomLink>

                </nav>

                <div className={styles.actions}>
                    <div className={styles.actions__link}>
                        <Icon name="location" width="24" height="24"/>
                        <p>Казань</p>
                    </div>

                    {localStorage.getItem("user") ?
                        <>
                            <div className={styles.actions__link}>
                                <img src={currency} alt="currency"/>
                                <p>1000</p>
                            </div>
                            <NavLink to={"/profile/history"} className={styles.actions__link}>
                                <img src={profile} alt="profile"/>
                                <p>Алексей</p>
                            </NavLink>
                        </>
                        :
                        <div className={styles.actions__link}>
                            <Button
                                type="button"
                                onClick={openModal}
                                disabled={false}
                                theme=""
                                color={"rgba(0, 11, 38, 0.64)"}
                            >
                                <Icon name="goIn" width="24" height="24"/>
                                Войти
                            </Button>
                        </div>
                    }
                </div>
            </section>
        </header>
    );
};

export default Header;