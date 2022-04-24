import {NavLink} from "react-router-dom";
import {Button} from "../../ui/Button/Button";
import {Icon} from "../../ui/Icon/Icon";
import {useStores} from "../../../utils/use-stores-hook";
import {LoginModal} from "../../Modals/LoginModal/LoginModal";
import {SideBarModal} from "../../Modals/SideBarModal/SideBarModal";
import logo from "../../../svg-icons/logo.svg";
import currency from "../../../svg-icons/currency.svg";
import profile from "../../../svg-icons/profile.svg";
import burger_menu from "../../../svg-icons/burger-menu.svg";
import styles from "./MobileHeader.module.scss";

export const MobileHeader = () => {
    const {modalStore: {setCurrentModal}} = useStores();

    const openSignModal = () => {
        setCurrentModal(LoginModal);
    };

    const onMenuClick = () => {
        setCurrentModal(SideBarModal);
    };

    return (
        <>
            <header className={styles.header}>
                <section className={styles.header__container}>

                    <NavLink to={"/"}>
                        <img src={logo} alt="logo"/>
                    </NavLink>

                    <div className={styles.actions}>
                        {localStorage.getItem("user") ?
                            <>
                                <div className={styles.actions__link}>
                                    <img src={currency} alt="currency"/>
                                    <p>1000</p>
                                </div>

                                <NavLink to={"/profile/history"} className={styles.actions__link}>
                                    <img src={profile} alt="profile"/>
                                </NavLink>
                            </>

                            :
                            <div className={styles.actions__link}>
                                <Button
                                    type="button"
                                    onClick={openSignModal}
                                    disabled={false}
                                    theme=""
                                    color={"rgba(0, 11, 38, 0.64)"}
                                >
                                    <Icon name="goIn" width="24" height="24"/>
                                    Войти
                                </Button>
                            </div>
                        }
                        <Button type={"button"} theme={""} onClick={onMenuClick}>
                            <img src={burger_menu} alt=""/>
                        </Button>
                    </div>
                </section>
            </header>
        </>
    );
};