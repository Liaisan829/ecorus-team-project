import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../Cards/BottomCard/BottomCard.module.scss";

const BottomCardSkeleton = () => {
  return (
    <>
      <div className={styles.informBlock__info}>
        <Skeleton duration={1} width={220} height={30} />
        <Skeleton duration={1} width={235} height={40} className={styles.skeletonItem} />
        <div className={styles.cardButton}>
          <Skeleton duration={1} width={45} height={45} />
        </div>
      </div>
      <div className={styles.skeletonImg}>
        <Skeleton duration={1} width={250} height={250} />
      </div>
    </>

  );
};

export default BottomCardSkeleton;