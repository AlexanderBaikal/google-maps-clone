import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./_map.css";
import { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu";

const Map = ({ zoomDelta, setZoomDelta, setOpenEditInfo, setContent, setContentSnapshot }) => {
  const [map, setMap] = useState(null);

  const [contextCoords, setContextCoords] = useState(null);

  useEffect(() => {
    if (map) {
      map.setZoom(map.getZoom() + zoomDelta);
      setZoomDelta(0);
      map.on("contextmenu", onContextMenu);
    }
  }, [zoomDelta, map]);

  const onContextMenu = (e) => {
    setOpened(true);
    setContextCoords({ point: e.containerPoint, latlng: e.latlng });
  };

  const [opened, setOpened] = useState(false);

  return (
    <>
      <MapContainer
        center={[52.27, 104.29]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/{id}/tiles/512/{z}/{x}/{y}?access_token={accessToken}"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          id="mapbox/outdoors-v11"
          accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          maxZoom={18}
          tileSize={512}
          zoomOffset={-1}
        />
      </MapContainer>
      {contextCoords && opened ? (
        <ContextMenu
          screenCoords={contextCoords.point}
          geoCoords={contextCoords.latlng}
          setOpened={setOpened}
          setOpenEditInfo={setOpenEditInfo}
          setContent={setContent}
          setContentSnapshot={setContentSnapshot}
        />
      ) : null}
    </>
  );
};

export default Map;
