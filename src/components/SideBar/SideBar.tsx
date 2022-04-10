import close from "../../svg-icons/close.svg";
import profile from "../../svg-icons/profile.svg";
import currency from "../../svg-icons/currency.svg";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";
import { Icon } from "../ui/Icon/Icon";
import { Button } from "../ui/Button/Button";

export const SideBar = ({ onCloseClick }: any) => {
  return (
    <div className={styles.side_menu}>
      <Button type={"button"} theme={""} onClick={()=>onCloseClick}>
        <img className={"close_button"} src={close} alt="close" />
      </Button>

      <div className={styles.side_bar}>
        <div className={styles.side_bar__userInfo}>
          <img src={profile} alt="profile" />

          <div className={styles.side_bar__userInfo__userName}>
            <h6>Алексей Петрович</h6>

            <div className={styles.side_bar__userInfo__balance}>
              <img src={currency} alt="currency" />
              <p>1000</p>
            </div>
          </div>
        </div>

        <nav className={styles.side_bar__nav}>
          <NavLink to={"/"} className={styles.side_bar__nav__link}>Главная</NavLink>
          <NavLink to={"/collpoints"} className={styles.side_bar__nav__link}>Пункты сбора</NavLink>
          <NavLink to={"/ecomarket"} className={styles.side_bar__nav__link}>ЭкоМаркет</NavLink>
          <NavLink to={"/aboutservice"} className={styles.side_bar__nav__link}>О сервисе</NavLink>
        </nav>

        <div className={styles.address}>
          <Icon name="location" width="24" height="24" />
          <p>Казань</p>
        </div>
      </div>
    </div>
  );
};