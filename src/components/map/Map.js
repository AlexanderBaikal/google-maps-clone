import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./_map.css";
import { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu";
import { getIcon } from "../../icons/typeIcons";
import { DESCRIPTION_BAR } from "../../redux/active/actions";

const Map = ({
  zoomDelta,
  setZoomDelta,
  setOpenEditInfo,
  setContent,
  setContentSnapshot,
  points,
  setActiveBar,
  setDescriptionData,
  loadData,
  setUnderSearchBar,
  currentCoords,
}) => {
  const [map, setMap] = useState(null);

  points = points || [];

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

  const onMarkerClick = (point) => {
    setUnderSearchBar(true);
    setDescriptionData(point.name);
    setActiveBar(DESCRIPTION_BAR);
    loadData(point.name);
  };

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (map) {
      if (currentCoords && currentCoords.latitude) {
        map.flyTo({
          lat: currentCoords.latitude,
          lng: currentCoords.longitude,
        });
      } else {
        map.flyTo({ lat: 52.2, lng: 104.2 });
      }
    }
  }, [currentCoords]);

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
        {points.map((point) => (
          <Marker
            key={Object.values(point.coords).join("")}
            position={Object.values(point.coords)}
            icon={getIcon(point.type)}
            eventHandlers={{
              click: (e) => onMarkerClick(point),
            }}
          >
            <Tooltip direction="right" offset={[-8, -2]} opacity={1} sticky>
              <span>{point.name}</span>
            </Tooltip>
          </Marker>
        ))}
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
