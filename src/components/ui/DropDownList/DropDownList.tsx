import {FC} from "react";
import styles from './DropDownList.module.scss';

interface Props {
    title: string,
    subtitle: string[]
}

const DropDownList: FC<Props> = ({title, subtitle}) => {
    return (
        <select className={styles.dropDownList}>
            <option disabled selected>{title}</option>
            {subtitle.map(item => (
                <option>{item}</option>
            ))}
        </select>
    );
};

export default DropDownList;
