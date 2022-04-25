import { Button } from "../../components/ui/Button/Button";

export const SortingButtons = () => {

  return (
    <>
      <Button
        type={"button"}
        theme={"eco"}
        children={"По популярности"}
      />

      <Button
        type={"button"}
        theme={"eco"}
        children={"По цене"}
      />

      <Button
        type={"button"}
        theme={"eco"}
        children={"По новизне"}
      />
    </>
  );
};