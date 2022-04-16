import {BottomSheet} from "react-spring-bottom-sheet";
import CollectionPointCard from '../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCard';
import collection from "../../svg-icons/collectionPointImg.svg";
import styles from './CardsBottomSheet.module.scss';

const CardsBottomSheet = () => {
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
                <CollectionPointCard
                    img={collection}
                    address={'ул.Кремлёвская, 88'}
                    description={'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...'}
                />
                <CollectionPointCard
                    img={collection}
                    address={'ул.Кремлёвская, 88'}
                    description={'Стекло, бумага, металл, старая одежда, батареи'}
                />
                <CollectionPointCard
                    img={collection}
                    address={'ул.Кремлёвская, 88'}
                    description={'Пластик, стекло, бумага, металл'}
                />
            </div>
        </BottomSheet>
    );
};

export default CardsBottomSheet;