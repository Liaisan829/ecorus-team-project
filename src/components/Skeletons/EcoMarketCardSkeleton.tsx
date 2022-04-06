import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "../../pages/Ecomarket/Ecomarket.module.scss";

const EcoMarketCardSkeleton = () => {
    return (
        <section className={styles.productCards}>
            <Skeleton duration={1} height={360} width={275} className={styles.productCardsItem}/>
            <Skeleton duration={1} height={360} width={275} className={styles.productCardsItem}/>
            <Skeleton duration={1} height={360} width={275} className={styles.productCardsItem}/>
            <Skeleton duration={1} height={360} width={275} className={styles.productCardsItem}/>
            <Skeleton duration={1} height={360} width={275} className={styles.productCardsItem}/>
            <Skeleton duration={1} height={360} width={275} className={styles.productCardsItem}/>
        </section>
    );
};

export default EcoMarketCardSkeleton;