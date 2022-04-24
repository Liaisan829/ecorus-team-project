import {FC} from "react";
import styles from "./Checkbox.module.scss";

interface Props {
    title: string;
    isChecked: boolean
    checkHandler: any
    index?: number
}

export const Checkbox: FC<Props> = ({title, isChecked, checkHandler, index}) => {

    return (
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
                <p className={isChecked ? styles.checkbox__activeText : styles.checkbox__text}>{title}</p>
            </label>
        </>
    )
}