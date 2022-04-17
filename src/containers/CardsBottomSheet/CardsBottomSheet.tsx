import {BottomSheet} from "react-spring-bottom-sheet";
import CollectionPointCard from '../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCard';
import styles from './CardsBottomSheet.module.scss';
import {useEffect, useState} from "react";
import {CollPoints, CollPointsModel} from "../../stores/CollPointsStore";
import {Button} from "../../components/ui/Button/Button";
import {useStores} from "../../utils/use-stores-hook";
import CollCardsModal from "../../components/Modals/CollCardsModal/CollCardsModal";

const CardsBottomSheet = () => {
    const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);
    const { modalStore: { setCurrentModal } } = useStores();

    const onOpenCardsModal = () => {
        setCurrentModal(CollCardsModal);
    };

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
            <Button
                type={'button'}
                theme={''}
                onClick={onOpenCardsModal}
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
            </Button>
        </BottomSheet>
    );
};

export default CardsBottomSheet;