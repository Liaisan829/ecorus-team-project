import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CollPoints, CollPointsModel} from "../../stores/CollPointsStore";
import CollectionPointFullCard from "../../components/Cards/CollectionPointCards/FullCard/CollectionPointFullCard";

const CollPointsFullContainer = () => {
    const [collPoints, setCollPoints] = useState<Array<CollPointsModel>>([]);
    const [collPoint, setCollPoint] = useState<CollPointsModel>();
    const {id} = useParams();

    useEffect(() => {
        setCollPoints(CollPoints);

        if (typeof id === "string") {
            const collectionPointFullCard = collPoints.find(collPoint => collPoint.id === +id);
            setCollPoint(collectionPointFullCard);
        }
    }, [id, collPoints]);

    return (
        <div>
            {collPoint && (
                <CollectionPointFullCard collectionPointFullCard={collPoint}/>
            )}
        </div>
    );
};

export default CollPointsFullContainer;