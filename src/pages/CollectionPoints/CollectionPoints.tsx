import Map from "../../components/Map/Map";
import CollectionPointCard from "../../components/Cards/CollectionPointCards/CommonCard/CollectionPointCard";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import DropDownList from "../../components/ui/DropDownList/DropDownList";
import collection from '../../svg-icons/collectionPointImg.svg';
import styles from './CollectionPoints.module.scss';
import {Button} from "../../components/ui/Button/Button";
import {Icon} from "../../components/ui/Icon/Icon";

export const CollectionPoints = () => {
    return (
        <>
            <div className={styles.mapPage}>
                <section className={styles.mapPage__info}>

                    <div className={styles.mapPage__info__top}>
                        <SearchInput/>
                        <div className={styles.mapPage__info__filterBtn}>
                            <Button
                                type={"button"}
                                theme={"filter"}
                            >
                                <Icon name={"filter"} width={20} height={20}/>
                            </Button>
                        </div>
                        <DropDownList
                            title={'Выбрано 3 магазина'}
                            subtitle={
                                ['Выбрать все', 'Nike', 'H&M', 'Adidas']
                            }
                        />
                        <DropDownList
                            title={'Материалы'}
                            subtitle={['Стекло', 'Пластик', 'Дерево']}
                        />
                    </div>

                    <div className={styles.mapPage__info__cards}>
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
                </section>
                <Map/>
            </div>
        </>
    )
}