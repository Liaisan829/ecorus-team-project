import React from "react";
import { Modal } from "../Modal/Modal";
import { observer } from "mobx-react";
import { useStores } from "../../../utils/use-stores-hook";

const LoginWithCodeModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();

  return (
    <Modal title="Вход или регистрация" onClose={clearCurrentModal}>
      hello im login with code
    </Modal>
  );
});

export default LoginWithCodeModal;