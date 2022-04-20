import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import CollectionPointCommonCard
  from "../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCommonCard";
import { CollPoints, CollPointsModel } from "../../stores/CollPointsStore";
import { useStores } from "../../utils/use-stores-hook";
import CollCardsModal from "../../components/Modals/CollCardsModal/CollCardsModal";
import styles from "./CardsBottomSheet.module.scss";

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
      snapPoints={({ headerHeight, maxHeight }) => [
        headerHeight,
        (maxHeight - 150) * 0.65,
        maxHeight - 150
      ]}
      header={
        <div className={styles.cards__header}>
          Показать 12 пунктов сбора
        </div>
      }
      open
    >

      {collPoints.map(collPoint => (
        <div className={styles.cards}>
          <NavLink to={`/collpoints/${collPoint.id}`} onClick={onOpenCardsModal}>
            <CollectionPointCommonCard
              id={collPoint.id}
              img={collPoint.img}
              address={collPoint.address}
              description={collPoint.description}
            />
          </NavLink>
        </div>
      ))}
    </BottomSheet>
  );
};

export default CardsBottomSheet;