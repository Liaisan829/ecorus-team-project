import {BottomSheet} from "react-spring-bottom-sheet";
import CollectionPointCard from '../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCard';
import styles from './CardsBottomSheet.module.scss';
import {useEffect, useState} from "react";
import {CollPoints, CollPointsModel} from "../../stores/CollPointsStore";

const CardsBottomSheet = () => {
    const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);

    useEffect(() => {
        setCollPoints(CollPoints);
    }, []);

    return (
        <BottomSheet
            className={styles.bottomSheet}
            blocking={false}
            scrollLocking={false}
            snapPoints={({headerHeight, maxHeight}) => [
                headerHeight,
                (maxHeight - 150) * 0.65,
                maxHeight - 150
            ]}
            header={
                <div className={styles.sortingButtons}>
                    Показать 12 пунктов сбора
                </div>
            }
            open
        >
            <div className={styles.cards}>
                {collPoints.map(collPoint => (
                    <CollectionPointCard
                        id={collPoint.id}
                        img={collPoint.img}
                        address={collPoint.address}
                        description={collPoint.description}
                    />
                ))}
            </div>
        </BottomSheet>
    );
};

export default CardsBottomSheet;