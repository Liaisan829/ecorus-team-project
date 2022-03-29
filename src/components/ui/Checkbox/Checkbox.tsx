import styles from "./Checkbox.module.scss";
import { FC, useState } from "react";

// interface CheckboxNew {
//   text: string,
//   index?: string,
//   checkHandler?: () => {}
// }
//
// export const CheckboxNew: FC<CheckboxNew> = ({ text, index, checkHandler }) => {
//   const [checked, setChecked] = useState(false);
//   return (
//     <>
//       <label className={styles.checkbox}>
//         <input type="checkbox"
//                id={`${index}`}
//                className={styles.checkbox__input}
//                onClick={() => setChecked(!checked)}
//         />
//         <span />
//         <span className={checked ? styles.checkbox__activeSpan : styles.checkbox__span} />
//         <p className={checked ? styles.checkbox__activeText : styles.checkbox__text}>{text}</p>
//       </label>
//     </>
//   );
// };


interface Props{
  text: string;
  checked: boolean
  onChange:any
}

export const Checkbox:FC<Props> = ({text, checked, onChange}) => {

  return(
    <>
      <label className={styles.checkbox}>
        <input
          className={styles.checkbox__input}
          key={text}
          value={text}
          onChange={onChange}
          type="checkbox"
          checked={checked}
        />
        <span className={checked ? styles.checkbox__activeSpan : styles.checkbox__span}/>
        <p className={checked ? styles.checkbox__activeText : styles.checkbox__text}>{text}</p>
      </label>
    </>
  )
}