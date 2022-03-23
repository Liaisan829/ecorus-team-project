import { ModalStore } from "./ModalStore";
import { CheckboxStore } from "./CheckboxStore";

export class MainStore {
  modalStore: ModalStore;
  checkboxStore: CheckboxStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.checkboxStore = new CheckboxStore();
  }
}

const mainStore = new MainStore();

export default mainStore;