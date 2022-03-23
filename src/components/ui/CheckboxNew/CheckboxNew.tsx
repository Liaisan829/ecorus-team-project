import styles from "./CheckboxNew.module.scss";
import { FC, useState } from "react";

interface CheckboxNew {
  id:number,
  text: string,
  handleClick?: Function,
  isChecked: boolean
}

export const CheckboxNew: FC<CheckboxNew> = ({ id, text , handleClick, isChecked}) => {

  // const [checked, setChecked] = useState(false);

  return (
    <>
      <label className={styles.checkbox}>
        <input id={`${id}`} type="checkbox" className={styles.checkbox__input} onChange={()=>handleClick} checked={isChecked}/>
        <span className={isChecked ? styles.checkbox__activeSpan : styles.checkbox__span} onClick={()=>handleClick}/>
        <p className={isChecked ? styles.checkbox__activeText : styles.checkbox__text}>{text}</p>
      </label>
    </>
  );
};