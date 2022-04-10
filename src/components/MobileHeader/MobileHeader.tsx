import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/Icon/Icon";
import logo from "../../svg-icons/logo.svg";
import currency from "../../svg-icons/currency.svg";
import profile from "../../svg-icons/profile.svg";
import burger_menu from "../../svg-icons/burger-menu.svg";
import styles from "./MobileHeader.module.scss";
import { SideBar } from "../SideBar/SideBar";

export const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    console.log("sign in");
  };

  const onMenuClick = () => {
    console.log("menu click");
    setOpen(true);
  };

  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>

          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>

          <div className={styles.actions}>
            {localStorage.getItem("user") ?
              <>
                <div className={styles.actions__link}>
                  <img src={currency} alt="currency" />
                  <p>1000</p>
                </div>

                <NavLink to={"/profile"} className={styles.actions__link}>
                  <img src={profile} alt="profile" />
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
                  <Icon name="goIn" width="24" height="24" />
                  Войти
                </Button>
              </div>
            }
            <Button type={"button"} theme={""} onClick={onMenuClick}>
              <img src={burger_menu} alt="" />
            </Button>
          </div>

        </section>
      </header>
      {open && <SideBar onCloseClick={() => setOpen} />}
    </>
  );
};