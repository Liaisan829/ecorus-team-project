import { FC } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  id: number,
  text: string,
  onCheckboxClick?: any,
  checked?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({ id, text, checked }) => {
  return (
    <>
      <div className={styles.checkbox__container}>
        <input
          type="checkbox"
          id={`${id}`}
          checked={checked}
          className={styles.checkbox}
        />
        <label
          htmlFor={`${id}`}//для связи с инпутом
          className={styles.text}
        >
          {text}</label>
      </div>
    </>
  );
};