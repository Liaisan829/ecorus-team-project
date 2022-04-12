import { BottomSheet } from "react-spring-bottom-sheet";
import { useState } from "react";
import { SortingButtons } from "../SortingButtons/SortingButtons";
import { Button } from "../../components/ui/Button/Button";
import { FilterCheckboxes } from "../FilterCheckboxes/FilterCheckboxes";
import useDebounce from "../../utils/useDebounce";
import styles from "./EcomarketBottomSheet.module.scss";
import "../../containers/FilterCheckboxes/FilterCheckboxes.module.scss";

export const EcomarketBottomSheet = () => {

  const [loadingOpen, setLoadingOpen] = useState<boolean>(false);
  const open = useDebounce(loadingOpen, 1000);

  return (
    <>
      <BottomSheet
        open
        blocking={false}
        scrollLocking={false}
        snapPoints={({ headerHeight, maxHeight }) => [
          headerHeight,
          (maxHeight - 56) * 0.65,
          maxHeight - 56
        ]}
        onSpringStart={(event) => event.type === "SNAP" && setLoadingOpen(true)}
        header={
          <div className={styles.sortingButtons}>
            <SortingButtons />
          </div>
        }
        footer={
          <>
            <Button
              type={"button"}
              theme={"green"}
              children={"Применить"}
            />

            <Button
              type={"button"}
              theme={"grey"}
              children={"Сбросить фильтры"}
            />
          </>
        }
      >
        <FilterCheckboxes />
      </BottomSheet>
    </>
  );
};