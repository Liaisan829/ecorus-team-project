import {FC, useEffect, useState} from "react";
import {Button} from "../../ui/Button/Button";
import {Icon} from "../../ui/Icon/Icon";
import styles from "./BottomCard.module.scss";
import BottomCardSkeleton from "../../Skeletons/BottomCardSkeleton";

interface BottomCardProps {
    cardHeadline: string,
    cardText: string,
    img: any
}

export const BottomCard: FC<BottomCardProps> = ({cardHeadline, cardText, img}) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timing);
    }, []);

    const onBottomButtonClick = () => {
        // console.log("click")
    };

    return (
        <div className={styles.informBlock}>
            {loading ? <BottomCardSkeleton/> :
                <>
                    <div className={styles.informBlock__info}>
                        <h1>{cardHeadline}</h1>
                        <p>{cardText}</p>
                        <div className={styles.informBlock__info__cardButton}>
                            <Button
                                type="button"
                                onClick={onBottomButtonClick}
                                theme="grey"
                                disabled={false}
                            >
                                <Icon name="buttonArrow" width="24" height="24"/>
                            </Button>
                        </div>
                    </div>
                    <img src={img} alt="image"/>
                </>
            }
        </div>
    );
};