import {BottomSheet} from "react-spring-bottom-sheet";
import {FC, useEffect, useState} from "react";
import {FilterCheckboxes} from "../FilterCheckboxes/FilterCheckboxes";
import {Button} from "../../components/ui/Button/Button";
import styles from "./CollectionPointsBottomSheet.module.scss";

interface Props {
    isOpen: boolean;
}

export const CollectionPointsBottomSheet: FC<Props> = ({isOpen}) => {
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
            snapPoints={({maxHeight}) => [
                 0.7 * maxHeight
            ]}
            onDismiss={() => {
                setOpen(false)
            }}
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
