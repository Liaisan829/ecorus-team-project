import React, {FC, ReactNode} from "react";
import {MobileHeader} from "../MobileHeader/MobileHeader";
import Header from "../Header/Header";
import styles from "./BaseLayout.module.scss";

interface Props {
    children: ReactNode;
}

export const BaseLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.app}>
            <Header/>
            <MobileHeader/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};