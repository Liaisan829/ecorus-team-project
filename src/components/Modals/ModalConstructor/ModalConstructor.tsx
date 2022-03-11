import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {cloneElement} from "react";

//подписывается на ModalStore и внутрь себя рендерит текущую модалку

export const ModalConstructor = observer(() => {
  const {modalStore: {currentModal: CurrentModal}} = useStores();

  if (CurrentModal) {
    // @ts-ignore
    return cloneElement(<CurrentModal/>)
  } else {
    return null;
  }
});