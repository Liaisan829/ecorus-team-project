import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {CollPoints, CollPointsModel} from "../../../stores/CollPointsStore";
import CollectionPointFullCard from "../../Cards/CollectionPointCards/FullCard/CollectionPointFullCard";
import {Button} from "../../ui/Button/Button";
import {Icon} from "../../ui/Icon/Icon";
import styles from "./CollCardsModal.module.scss";

const CollCardsModal = observer(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const {modalStore: {clearCurrentModal}} = useStores();
    const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);

    useEffect(() => {
        setCollPoints(CollPoints);
    }, []);

    const onGoBackClick = () => {
        clearCurrentModal();
        navigate(-1);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__popup}>
                <div className={styles.overlay__popup__top}>
                    <Button
                        type={"button"}
                        onClick={onGoBackClick}
                        theme={""}
                    >
                        <Icon name={"back"} width={15} height={15}/>
                        Вернуться назад
                    </Button>
                </div>
                {collPoints.filter((filteredPoint) => (location.pathname.slice(-1) === filteredPoint.id.toString())).map(collPoint => (
                    <CollectionPointFullCard collectionPointFullCard={collPoint}/>
                ))}
                <Button
                    type="button"
                    onClick={onGoBackClick}
                    theme="green"
                >Закрыть</Button>
            </div>
        </div>
    );
});

export default CollCardsModal;