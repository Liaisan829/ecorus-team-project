import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Map from "../../components/Map/Map";
import CollectionPointCommonCard from "../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCommonCard";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import DropDownList from "../../components/ui/DropDownList/DropDownList";
import { Button } from "../../components/ui/Button/Button";
import { Icon } from "../../components/ui/Icon/Icon";
import { CollectionPointsBottomSheet } from "../../containers/CollectionPointsBottomSheet/CollectionPointsBottomSheet";
import CardsBottomSheet from "../../containers/CardsBottomSheet/CardsBottomSheet";
import { CollPointsModel, CollPoints } from "../../stores/CollPointsStore";
import styles from "./CollectionPoints.module.scss";

export const CollectionPoints = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);

  const onFilterClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCollPoints(CollPoints);
  }, []);

  return (
    <>
      <div className={styles.mapPage}>
        <section className={styles.mapPage__info}>

          <div className={styles.mapPage__info__top}>
            <SearchInput />
            <div className={styles.mapPage__info__filterBtn}>
              <Button
                type={"button"}
                theme={"filter"}
                onClick={onFilterClick}
              >
                <Icon name={"filter"} width={20} height={20} />
              </Button>
            </div>
            <DropDownList
              title={"Выбрано 3 магазина"}
              subtitle={
                ["Выбрать все", "Nike", "H&M", "Adidas"]
              }
            />
            <DropDownList
              title={"Материалы"}
              subtitle={["Стекло", "Пластик", "Дерево"]}
            />
          </div>

          <div className={styles.mapPage__info__cards}>
            {collPoints.map(collPoint => (
                <NavLink to={`/collpoints/${collPoint.id}`}>
                  <CollectionPointCommonCard
                    key={collPoint.address}
                    id={collPoint.id}
                    img={collPoint.img}
                    address={collPoint.address}
                    description={collPoint.description}
                  />
                </NavLink>
              )
            )}
          </div>
          <div className={styles.mapPage__info__outlet}>
            <Outlet />
          </div>
        </section>
        <Map />
      </div>
      <CollectionPointsBottomSheet isOpen={isOpen} />
      <CardsBottomSheet/>
    </>
  );
};