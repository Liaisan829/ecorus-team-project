import React, { FC, ReactNode } from "react";
import Header from "../Header/Header";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import styles from "./BaseLayout.module.scss";

interface Props {
  children: ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <MobileHeader />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};