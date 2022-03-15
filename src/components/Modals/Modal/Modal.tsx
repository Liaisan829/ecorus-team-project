import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";
import {Icon} from "../../ui/Icon/Icon";

interface Props {
  title: ReactNode;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ title, onClose, children }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.overlay__popup}>
          <div className={styles.overlay__popup__top}>
            {title}
            <button onClick={onClose}><Icon name="close" width={24} height={24}/></button>
          </div>

          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};