import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import cn from "classnames/bind";

interface ButtonProps {
  type: any,
  onClick: () => void,
  theme: string,
  disabled: boolean
}
classNames();

const cx = cn.bind(styles);

export const Button: FC<ButtonProps> = ({ type, onClick, children , theme, disabled}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cx(styles.button, {
          buttonGreen: theme === 'green',
          buttonGrey: theme === 'grey',
          buttonDefault: theme === ''
        })}
      >
        {children}
      </button>

    </>
  );
};