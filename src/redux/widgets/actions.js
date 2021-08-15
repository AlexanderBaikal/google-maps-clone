export const SET_PLACES_BAR = "SET_PLACES_BAR";
export const SET_UNDERSEARCH_BAR = "SET_UNDERSEARCH_BAR";
export const SET_MENU_SIDEBAR = "SET_MENU_SIDEBAR";
export const SET_BOTTOM_GALLERY = "SET_BOTTOM_GALLERY";

export const setBottomGallery = (bottomGallery) => ({
  type: SET_BOTTOM_GALLERY,
  payload: bottomGallery,
});

export const setPlacesBar = (placesBar) => ({
  type: SET_PLACES_BAR,
  payload: placesBar,
});

export const setUndersearchBar = (underSearchBar) => ({
  type: SET_UNDERSEARCH_BAR,
  payload: underSearchBar,
});

export const setMenuSidebar = (menuSidebar) => ({
  type: SET_MENU_SIDEBAR,
  payload: menuSidebar,
});
