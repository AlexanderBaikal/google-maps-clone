export const SET_MENU_SIDEBAR = "SET_MENU_SIDEBAR";
export const SET_ZOOM_DELTA = "SET_ZOOM_DELTA";

export const setMenuSidebar = (menuSidebar) => ({
  type: SET_MENU_SIDEBAR,
  payload: menuSidebar,
});

export const setZoomDelta = (zoomDelta) => {
  return {
    type: SET_ZOOM_DELTA,
    payload: zoomDelta,
  };
};


