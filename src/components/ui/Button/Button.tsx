import { FC } from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

interface ButtonProps {
  type: any,
  onClick?: () => void,
  theme: string,
  disabled?: boolean,
  color?: string,
}

const cx = cn.bind(styles);

export const Button: FC<ButtonProps> = ({ type, onClick, children , theme, disabled, color}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        style={{ "color": `${color}` }}
        className={cx(styles.button, {
          buttonGreen: theme === 'green',
          buttonGrey: theme === 'grey',
          buttonDefault: theme === '',
          buttonEco: theme === 'eco'
        })}
      >
        {children}
      </button>

    </>
  );
};