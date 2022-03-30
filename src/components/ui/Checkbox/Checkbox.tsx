import styles from "./Checkbox.module.scss";
// import { FC, useState } from "react";
//
// interface Props{
//   text: string;
//   onChange?:any
// }
//
// export const Checkbox:FC<Props> = ({text, onChange}) => {
//
//   const [clicked, setClicked] = useState<boolean>(false);
//
//   return(
//     <>
//       <label className={styles.checkbox}>
//         <input
//           className={styles.checkbox__input}
//           key={text}
//           value={text}
//           onChange={()=>setClicked(!clicked)}
//           type="checkbox"
//           checked={clicked}
//         />
//         <span className={clicked ? styles.checkbox__activeSpan : styles.checkbox__span}/>
//         <p className={clicked ? styles.checkbox__activeText : styles.checkbox__text}>{text}</p>
//       </label>
//     </>
//   )
// }

import {FC} from "react";

interface Props{
  title: string;
  isChecked: boolean
  checkHandler:any
  index?: number
}

export const Checkbox:FC<Props> = ({title, isChecked, checkHandler, index}) => {

  return(
    <>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          id={`checkbox-${index}`}
          checked={isChecked}
          onChange={checkHandler}
          className={styles.checkbox__input}
        />
        <span className={isChecked ? styles.checkbox__activeSpan : styles.checkbox__span}/>
        <p className={isChecked ? styles.checkbox__activeText : styles.checkbox__text}>{title}</p>      </label>
    </>
  )
}