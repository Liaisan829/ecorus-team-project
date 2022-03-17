import { FC, ReactNode } from "react";
import { Icon } from "../../ui/Icon/Icon";
import { Button } from "../../ui/Button/Button";
import styles from "./Modal.module.scss";

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
            <Button
              onClick={onClose}
              type="button"
              theme=""
              disabled={false}
            >
              <Icon name="close" width={24} height={24} />
            </Button>
          </div>

          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};