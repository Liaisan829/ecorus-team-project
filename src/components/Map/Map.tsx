import {MapContainer, Marker, Popup, TileLayer, ZoomControl} from "react-leaflet";
import styles from "./Map.module.scss";

const Map = () => {
    return (
        <>
            <MapContainer
                center={[55.792910, 49.122429]}
                zoom={13}
                zoomControl={false}
                scrollWheelZoom={false}
                className={styles.mapContainer}
            >
                <div className={styles.parent_content}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[55.792910, 49.122429]}>
                        <Popup>
                            КФУ, ИТИС
                        </Popup>
                    </Marker>
                </div>
                <div className={styles.mapContainer__zoomControl}>
                    <ZoomControl/>
                </div>
            </MapContainer>
        </>
    );
};

export default Map;
