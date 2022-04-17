import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import styles from './CollCardsModal.module.scss';
import {CollPoints, CollPointsModel} from "../../../stores/CollPointsStore";
import CollectionPointFullCard from "../../Cards/CollectionPointCards/FullCard/CollectionPointFullCard";
import collection from "../../../svg-icons/collectionPointImg.svg";
import {Button} from "../../ui/Button/Button";
import {Icon} from "../../ui/Icon/Icon";

const CollCardsModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();
    const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);

    useEffect(() => {
        setCollPoints(CollPoints);
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__popup}>
                <div className={styles.overlay__popup__top}>
                    <Button
                        type={'button'}
                        onClick={clearCurrentModal}
                        theme={''}
                    >
                        <Icon name={'back'} width={15} height={15}/>
                        Вернуться назад
                    </Button>
                </div>
                {collPoints.slice(0, 1).map(collPoint => (
                    <CollectionPointFullCard
                        id={collPoint.id}
                        img={collection}
                        address={collPoint.fullAddress}
                        phone={collPoint.phone}
                        timetable={collPoint.timetable}
                        shop={collPoint.shop}
                        items={collPoint.items}
                    />
                ))}
                <Button
                    type="button"
                    onClick={clearCurrentModal}
                    theme="green"
                >Закрыть</Button>
            </div>
        </div>
    );
});

export default CollCardsModal;