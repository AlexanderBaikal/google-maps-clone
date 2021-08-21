export const SET_ACTIVE_BAR = "SET_ACTIVE_BAR";
export const PLACES_BAR = "PLACES_BAR";
export const DESCRIPTION_BAR = "DESCRIPTION_BAR";
export const MAIN_UNDERSEARCH_BAR = "MAIN_UNDERSEARCH_BAR";

export const setActiveBar = (activeBar) => {
  return {
    type: SET_ACTIVE_BAR,
    payload: activeBar,
  };
};
