export const SET_ZOOM_DELTA = "SET_ZOOM_DELTA";

export const setZoomDelta = (zoomDelta) => {
  return {
    type: SET_ZOOM_DELTA,
    payload: zoomDelta,
  };
};
