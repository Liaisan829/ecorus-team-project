import { observer } from "mobx-react";
import { useStores } from "../../../utils/use-stores-hook";
import { NavLink } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { Icon } from "../../ui/Icon/Icon";
import profile from "../../../svg-icons/profile.svg";
import currency from "../../../svg-icons/currency.svg";
import styles from "./SideBarModal.module.scss";

export const SideBarModal = observer(() => {
  const { modalStore: { clearCurrentModal } } = useStores();

  const onLinkClick = () => {
    clearCurrentModal();
  };

  return (
    <Modal title="" onClose={clearCurrentModal}>
      <div className={styles.side_bar}>
        {localStorage.getItem("user") ?
          <NavLink to={"/profile/history"} onClick={onLinkClick} className={styles.side_bar__userInfo}>
            <img src={profile} alt="profile" />

            <div className={styles.side_bar__userInfo__userName}>
              <h6>Алексей Петрович</h6>

              <div className={styles.side_bar__userInfo__balance}>
                <img src={currency} alt="currency" />
                <p>1000</p>
              </div>
            </div>
          </NavLink> : null}

        <nav className={styles.side_bar__nav}>
          <NavLink onClick={onLinkClick} to={"/"} className={styles.side_bar__nav__link}>Главная</NavLink>
          <NavLink onClick={onLinkClick} to={"/collpoints"} className={styles.side_bar__nav__link}>Пункты
            сбора</NavLink>
          <NavLink onClick={onLinkClick} to={"/ecomarket"} className={styles.side_bar__nav__link}>ЭкоМаркет</NavLink>
          <NavLink onClick={onLinkClick} to={"/aboutservice"} className={styles.side_bar__nav__link}>О сервисе</NavLink>
        </nav>

        <div className={styles.side_bar__address}>
          <Icon name="location" width="24" height="24" />
          <p>Казань</p>
        </div>
      </div>
    </Modal>
  );
});