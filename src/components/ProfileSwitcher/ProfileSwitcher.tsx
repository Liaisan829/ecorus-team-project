import {NavLink, Outlet} from "react-router-dom";
import styles from './ProfileSwitcher.module.scss';

const ProfileSwitcher = () => {
    return (
        <>
            <div className={styles.switcher}>
                <div className={styles.switcher__nav}>
                    <NavLink
                        className={({isActive}) => isActive ? styles.switchBtnActive : styles.switchBtn}
                        to={"promo"}
                        children={'Промокоды'}
                    />
                    <NavLink
                        className={({isActive}) => isActive ? styles.switchBtnActive : styles.switchBtn}
                        to={"history"}>
                        История
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        </>
    );
};

export default ProfileSwitcher;