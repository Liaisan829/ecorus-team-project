import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import Map from "../../components/Map/Map";
import styles from "./CollectionPoints.module.scss";

export const CollectionPoints = () => {
  return (
    <>
      <BaseLayout>
        <div className={styles.container}>
          <Map />
          <button>hello</button>
        </div>
      </BaseLayout>
    </>
  );
};