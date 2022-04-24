import {BottomSheet} from "react-spring-bottom-sheet";
import {FC, useEffect, useState} from "react";
import {SortingButtons} from "../SortingButtons/SortingButtons";
import {Button} from "../../components/ui/Button/Button";
import {FilterCheckboxes} from "../FilterCheckboxes/FilterCheckboxes";
import "../../containers/FilterCheckboxes/FilterCheckboxes.module.scss";
import styles from "./EcomarketBottomSheet.module.scss";

interface Props {
    isOpen: boolean;
}

export const EcomarketBottomSheet: FC<Props> = ({isOpen}) => {
    const [open, setOpen] = useState<boolean>(isOpen);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

    return (

        <BottomSheet
            className={styles.bottomSheet}
            open={open}
            blocking={false}
            scrollLocking={false}
            snapPoints={({headerHeight, maxHeight}) => [
                headerHeight,
                (maxHeight - 56) * 0.65,
                maxHeight - 56
            ]}
            onDismiss={() => {
                setOpen(false)
                isOpen = false
            }}
            header={
                <div className={styles.sortingButtons}>
                    <SortingButtons/>
                </div>
            }
            footer={
                <div className={styles.bottomSheet__btn}>
                    <Button
                        type={"button"}
                        theme={"green"}
                        onClick={() => setOpen(false)}
                        children={"Применить"}
                    />
                </div>
            }
        >
            <div className={styles.filter}>
                <FilterCheckboxes/>
            </div>
        </BottomSheet>

    );
};