import { FC, ReactNode, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import { Portal } from "../../../portal/Portal";
import { useModalClose } from "../../../utils/use-modal-close";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ visible, onClose, children }) => {

  const ref = useRef();
  useModalClose(ref, () => onClose);

  const onCloseModal = (event: any) => {
    if(event.target.className === styles.overlay) {
      onClose();
    }
  }

  if(!visible) return null;

  return (
    visible && (
      <Portal elem={'elem'} className={'portal-root'}>
        <div className={styles.overlay} onClick={(event) => onCloseModal(event)}>
          {children}
        </div>
      </Portal>
    )
  );
};
{/*<div>*/
}
{/*  {title}*/
}
{/*  <button onClick={onClose}><Icon name = "close" width={18} height={18}/></button>*/
}
{/*</div>*/
}
