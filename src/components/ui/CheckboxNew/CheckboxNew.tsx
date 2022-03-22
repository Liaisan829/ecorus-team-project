import styles from "./CheckboxNew.module.scss";
import { FC, useState } from "react";

interface CheckboxNew {
  text: string,
}

export const CheckboxNew: FC<CheckboxNew> = ({ text }) => {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.checkbox__input} onClick={() => setChecked(!checked)} />
        <span/>
        <p className={checked ? styles.checkbox__activeText : styles.checkbox__text}>{text}</p>
      </label>
    </>
  );
};