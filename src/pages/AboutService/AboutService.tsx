import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import styles from "./AboutService.module.scss";

export const AboutService = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        About Service Page
      </div>
    </BaseLayout>
  );
};