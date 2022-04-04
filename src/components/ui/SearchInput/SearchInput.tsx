import styles from './SearchInput.module.scss';
import {Icon} from "../Icon/Icon";

const SearchInput = () => {
    return (
        <div className={styles.searchInput}>
            <div className={styles.searchInput__icon}>
                <Icon name="search" width={22} height={22}/>
            </div>
            <input type="text" placeholder="Поиск"/>
        </div>
    );
};

export default SearchInput;