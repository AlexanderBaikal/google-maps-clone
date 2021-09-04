import { makeStyles } from "@material-ui/core";
import { MapContainer, TileLayer } from "react-leaflet";
import "./middleMap.css";
import locIcon from "../../../icons/loc.png";
import { useCallback, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  middleMap: {
    height: "100%",
    width: "100%",
  },
  marker: {
    zIndex: 1000,
    width: "34px",
    height: "34px",
  },
  markerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

const MiddleMap = ({ coords, setCoords }) => {
  const classes = useStyles();
  const [map, setMap] = useState(null);

  const onMove = useCallback(() => {
    setCoords(map.getCenter());
  }, [map]);

  useEffect(() => {
    if (map) map.on("move", onMove);

    return () => {
      if (map) map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <>
      <MapContainer
        center={Object.values(coords)}
        zoom={15}
        scrollWheelZoom={true}
        className={classes.middleMap}
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
      <div className={classes.markerWrapper}>
        <img src={locIcon} alt="loc" className={classes.marker} />
      </div>
    </>
  );
};

export default MiddleMap;
