import styles from "./CustomLink.module.scss";
import cn from "classnames/bind";
import classNames from "classnames/bind";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

classNames();

const cx = cn.bind(styles);

interface ICustomLink {
  to: string;
  className: string;
  children: string;
}

export const CustomLink = (props: ICustomLink) => {
  const { to, className, children } = props;

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={to}
      className={cx(styles.link, className, {
          linkActive: match
        }
      )}>
      {children}
    </Link>
  );
};