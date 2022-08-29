import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import marker from "../../assets/images/icon-location.svg";

const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [30, 40],
});

const Map = ({ lat, lng }) => {
  const position = [lat, lng];

  const styles = {
    mapRoot: {
      height: 600,
      zIndex: 0,
    },
  };

  return (
    <MapContainer
      style={styles.mapRoot}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>The location you selected</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
