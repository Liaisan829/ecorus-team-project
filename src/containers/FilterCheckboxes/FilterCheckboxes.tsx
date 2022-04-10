import styles from "../../pages/Ecomarket/Ecomarket.module.scss";
import {Checkbox} from "../../components/ui/Checkbox/Checkbox";
import {useState} from "react";
import {allBrands, allGenders, allTypes, Product} from "../../stores/FilterStore";
import {Button} from "../../components/ui/Button/Button";

export const FilterCheckboxes = () => {
    const [genders, setGenders] = useState(allGenders);
    const [types, setTypes] = useState(allTypes);
    const [brands, setBrands] = useState(allBrands);
    const [clicked, setClicked] = useState(false);
    const [allProductsTypes, setAllProductsTypes] = useState(false);
    const [allProductsBrand, setAllProductsBrand] = useState(false);


    const checkStatusProducts = (index: number, setProducts: any, products: Product[]) => {
        setClicked(!clicked);
        setProducts(
            products.map((product: Product, currentIndex: number) =>
                currentIndex === index ? {...product, checked: !product.checked} : product
            )
        );
    };

    const checkStatusAllProducts = (isAllProducts: boolean, setAllProducts: any, setProducts: any, products: Product[]) => {
        setClicked(!clicked);
        setAllProducts(!isAllProducts);
        setProducts(
            products.map((product: Product) =>
                isAllProducts ? {...product, checked: false} :
                    {...product, checked: true}
            )
        );
    };

    const resetFilters = () => {
        setAllProductsTypes(false)
        setAllProductsBrand(false)
        setGenders(allGenders)
        setBrands(allBrands)
        setTypes(allTypes)
    }

    return (
        <>
            <div className={styles.filter__block}>

                <h3>Пол</h3>

                {genders.map((gender, index) => (
                        <Checkbox
                            key={gender.name}
                            isChecked={gender.checked}
                            checkHandler={() => checkStatusProducts(index, setGenders, genders)}
                            title={gender.name}
                            index={index}
                        />
                    )
                )}

                <h3>Тип товара</h3>

                <Checkbox
                    isChecked={allProductsTypes}
                    checkHandler={() => checkStatusAllProducts(allProductsTypes, setAllProductsTypes, setTypes, types)}
                    title={"Выбрать все"}
                />
                {types.map((type, index) =>
                    <Checkbox
                        key={type.name}
                        isChecked={type.checked}
                        checkHandler={() => checkStatusProducts(index, setTypes, types)}
                        title={type.name}
                        index={index}/>
                )}

                <h3>Брэнд</h3>

                <Checkbox
                    isChecked={allProductsBrand}
                    checkHandler={() => checkStatusAllProducts(allProductsBrand, setAllProductsBrand, setBrands, brands)}
                    title={"Выбрать все"}
                />
                {brands.map((brand, index) =>
                    <Checkbox
                        key={brand.name}
                        isChecked={brand.checked}
                        checkHandler={() => checkStatusProducts(index, setBrands, brands)}
                        title={brand.name}
                        index={index}/>
                )}
            </div>
          <div className={styles.filter__btn}>
            <Button
                type="submit"
                theme="grey"
                onClick={() => resetFilters()}
            >Сбросить фильтры</Button>
          </div>
        </>
    );
};