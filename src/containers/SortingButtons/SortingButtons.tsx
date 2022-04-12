import axios from "axios";
import { Button } from "../../components/ui/Button/Button";

export const SortingButtons = () => {

  const getItems = () => {
    axios.get("market", {
      params: {
        page_number: 1,
        page_size: 10,
        sexes: `["MAN"]`,
        item_categories: `["SHOES"]`,
        shop_ids: `["ec4e2c1d-a495-4010-bbf9-67fc99c8be28"]`
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const onButtonClick = () => {
    getItems();
  };
  return (
    <>
      <Button
        type={"button"}
        theme={"eco"}
        onClick={onButtonClick}
        children={"По популярности"}
      />

      <Button
        type={"button"}
        theme={"eco"}
        onClick={onButtonClick}
        children={"По цене"}
      />

      <Button
        type={"button"}
        theme={"eco"}
        onClick={onButtonClick}
        children={"По новизне"}
      />
    </>
  );
};