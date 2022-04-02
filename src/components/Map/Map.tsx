import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import styles from "./Map.module.scss";

interface Props {
}

const Map: FC<Props> = ({ children }) => {
  return (
    <>
      <MapContainer
        center={[55.792910, 49.122429]}
        zoom={13}
        zoomControl={true}
        scrollWheelZoom={false}
        className={styles.mapContainer}
      >
        <div className={styles.parent_content}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[55.792910, 49.122429]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </div>

      </MapContainer>
    </>
  );
};

export default Map;
