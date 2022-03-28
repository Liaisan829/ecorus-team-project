import { FC } from 'react';
import {MapContainer, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet'
import styles from './Map.module.scss'

interface Props { }

const Map: FC<Props> = ({ children }) => {

    return (
        <div>
            <MapContainer
                center={[55.792910, 49.122429]}
                zoom={3}
                zoomControl={false}
                style={{ height: '100vh', width: '100%', display:'flex', flexDirection:'column-reverse'}}
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
                <ZoomControl/>

            </MapContainer>
        </div>
    )
}

export default Map;
