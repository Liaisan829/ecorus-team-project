import Footer from "../../components/Layout/Footer/Footer";
import {Button} from "../../components/ui/Button/Button";
import ProfileSwitcher from "../../components/ProfileSwitcher/ProfileSwitcher";
import {BaseLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import profile from "../../svg-icons/profile.svg";
import styles from "./Profile.module.scss";

export const Profile = () => {
    return (
        <>
            <BaseLayout>
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
            </BaseLayout>
            <Footer/>
        </>
    );
};