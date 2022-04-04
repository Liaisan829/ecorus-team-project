import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <BaseLayout>
      <div>
        <h1>Личный кабинет</h1>
        <div className={styles.userInfo}>

        </div>
      </div>
    </BaseLayout>
  );
};