import {animated, easings, useSpring} from "react-spring";
import styles from "../Cards/BottomCard/BottomCard.module.scss";


const BottomCardSkeleton = () => {
    const {background} = useSpring({
        from: {
            background: 'linear-gradient(146deg, #e1e1e3 10%, #f0f0f2 90%, #e1e1e3 100%)'
        },
        to: {
            background: 'linear-gradient(146deg, #f0f1f4 10%, #d9d9d9 55%, #f0f1f4 100%)'
        },
        config: {
            duration: 900,
            easing: easings.easeInOutQuart,
        },
        loop: {reverse: true},
    })
    return (
        <div className={styles.skeletonBlock}>
            <div className={styles.informBlock__info}>
                <animated.div className={styles.skeletonItem} style={{background, width: 220, height: 30}}/>
                <animated.div className={styles.skeletonItem} style={{background, width: 235, height: 40}}/>
                <div className={styles.cardButton}>
                    <animated.div className={styles.skeletonBtn} style={{background, width: 60, height: 50}}/>
                </div>
            </div>
            <div className={styles.skeletonImg}>
                <animated.div style={{background, width: 250, height: 250}}/>
            </div>
        </div>
    )
};

export default BottomCardSkeleton;