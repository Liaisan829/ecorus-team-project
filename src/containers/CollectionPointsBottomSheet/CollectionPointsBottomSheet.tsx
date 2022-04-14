import { BottomSheet } from "react-spring-bottom-sheet";
import {FC, useEffect, useState} from "react";
import CollectionPointCard from "../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCard";
import styles from "./CollectionPointsBottomSheet.module.scss";
import collection from "../../svg-icons/collectionPointImg.svg";

interface Props {
    isOpen: boolean;
}

export const CollectionPointsBottomSheet:FC<Props> = ({isOpen}) => {
    const [open, setOpen] = useState<boolean>(isOpen);

    useEffect(()=>{
        setOpen(isOpen)
    }, [isOpen]);

    return (
        <BottomSheet
            className={styles.bottomSheet}
            open={open}
            blocking={false}
            scrollLocking={false}
            snapPoints={({ headerHeight, maxHeight }) => [
                headerHeight,
                (maxHeight - 150) * 0.65,
                maxHeight - 150
            ]}
            onDismiss={()=> {
                setOpen(false)
            }}
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
