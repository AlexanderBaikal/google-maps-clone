function lon2tile(lon, zoom) {
  return Math.floor(((lon + 180) / 360) * Math.pow(2, zoom));
}
function lat2tile(lat, zoom) {
  return Math.floor(
    ((1 -
      Math.log(
        Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
      Math.pow(2, zoom)
  );
}

export const getTileImage = (coords) => {
  const id = "mapbox/outdoors-v11";
  const zoom = 15;

  const accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
  return `https://api.mapbox.com/styles/v1/${id}/tiles/512/${zoom}/${lon2tile(
    coords.longitude,
    zoom
  )}/${lat2tile(coords.latitude, zoom)}?access_token=${accessToken}`;
};
