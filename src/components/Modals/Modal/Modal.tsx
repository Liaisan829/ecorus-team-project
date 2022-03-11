import { FC, ReactNode } from "react";
import { Icon } from "../../ui/Icon/Icon";
import styles from "./Modal.module.scss";

interface Props {
  title: ReactNode;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ title, onClose, children }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div>
          {title}
          <button onClick={onClose}><Icon name = "close" width={18} height={18}/></button>
        </div>

        <div>
          {children}
        </div>
      </div>
    </>
  );
};