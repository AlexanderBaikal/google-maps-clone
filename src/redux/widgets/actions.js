export const SET_UNDERSEARCH_BAR = "SET_UNDERSEARCH_BAR";
export const SET_BOTTOM_GALLERY = "SET_BOTTOM_GALLERY";

export const setBottomGallery = (bottomGallery) => ({
  type: SET_BOTTOM_GALLERY,
  payload: bottomGallery,
});

export const setUnderSearchBar = (underSearchBar) => ({
  type: SET_UNDERSEARCH_BAR,
  payload: underSearchBar,
});
