import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./_map.css";
import { useEffect, useState } from "react";

const Map = ({ zoomDelta, setZoomDelta }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.setZoom(map.getZoom() + zoomDelta);
      setZoomDelta(0);
    }
  }, [zoomDelta, map]);

  return (
    <MapContainer
      center={[52.27, 104.29]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id="mapbox/outdoors-v11"
        accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
        maxZoom={18}
        tileSize={512}
        zoomOffset={-1}
      />
    </MapContainer>
  );
};

export default Map;
