import styles from "./BaseLayout.module.scss";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../ui/Icon/Icon";
import logo from "../../svg-icons/logo.svg";
import { CustomLink } from "../ui/СustomLink/CustomLink";

interface Props {
  children: ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <nav>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>

            <CustomLink to="/" className={styles.link}>Главная</CustomLink>
            <CustomLink to="/collpoints" className={styles.link}>Пункты
              сбора
            </CustomLink>
            <CustomLink to="/ecomarket" className={styles.link}>ЭкоМаркет</CustomLink>
            <CustomLink to="/aboutservice" className={styles.link}>О сервисе</CustomLink>
          </nav>

          <div className={styles.actions}>
            <div className={styles.actions__link}>
              <Icon name="location" width="24" height="24" />
              <p>Казань</p>
            </div>
            <div className={styles.actions__link}>
              <Icon name="goIn" width="24" height="24" />
              <p>Войти</p>
            </div>
          </div>
        </section>
      </header>

      <main className={styles.main}>
        <div className={styles.main__container}>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <section className={styles.footer__container}>

          <div className={styles.footer__contact}>
            <Icon name="letter" width="24" height="24" />
            <a href="mailto:info@ecorus.ru">info@ecorus.ru</a>
          </div>

          <div className={styles.footer__contact}>
            <Icon name="phone" width="24" height="24" />
            <a href="tel:+78008808888">+7(800) 880-88-88</a>
          </div>
        </section>
      </footer>
    </>
  );
};