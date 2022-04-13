import {Icon} from "../Icon/Icon";
import styles from './SearchInput.module.scss';

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