import styles from "./Checkbox.module.scss";
import { FC, useState } from "react";

interface Props{
  text: string;
  onChange?:any
}

export const Checkbox:FC<Props> = ({text, onChange}) => {

  const [clicked, setClicked] = useState<boolean>(false);

  return(
    <>
      <label className={styles.checkbox}>
        <input
          className={styles.checkbox__input}
          key={text}
          value={text}
          onChange={()=>setClicked(!clicked)}
          type="checkbox"
          checked={clicked}
        />
        <span className={clicked ? styles.checkbox__activeSpan : styles.checkbox__span}/>
        <p className={clicked ? styles.checkbox__activeText : styles.checkbox__text}>{text}</p>
      </label>
    </>
  )
}