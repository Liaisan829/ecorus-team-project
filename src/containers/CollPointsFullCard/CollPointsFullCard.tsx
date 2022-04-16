import collection from '../../svg-icons/collectionPointImg.svg';
import {useEffect, useState} from "react";
import {CollPoints, CollPointsModel} from "../../stores/CollPointsStore";
import CollectionPointFullCard from '../../components/Cards/CollectionPointCards/FullCard/CollectionPointFullCard';

const CollPointsFullCard = () => {
    const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);

    useEffect(() => {
        setCollPoints(CollPoints);
    }, []);

    return (
        <div>
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
        </div>
    );
};

export default CollPointsFullCard;