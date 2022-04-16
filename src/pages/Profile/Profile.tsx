import Footer from "../../components/Footer/Footer";
import {Button} from "../../components/ui/Button/Button";
import profile from '../../svg-icons/profile.svg';
import styles from "./Profile.module.scss";
import ProfileSwitcher from "../../components/ProfileSwitcher/ProfileSwitcher";

export const Profile = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Личный кабинет</h1>

                <div className={styles.profile}>
                    <div className={styles.profile__info}>
                        <div className={styles.profile__info__avatar}>
                            <img src={profile} alt=""/>
                            <h2>Алексей Петрович</h2>
                            <div className={styles.profile__info__personalData}>
                                <p>+7 (917) 888 88 88</p>
                                <p>ivanov@gmail.com</p>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            theme="grey"
                        >Редактировать</Button>
                    </div>

                    <ProfileSwitcher/>
                </div>
            </div>
            <Footer/>
        </>
    );
};