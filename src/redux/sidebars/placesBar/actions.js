export const LOAD_ALL_PLACES = "LOAD_ALL_PLACES";
export const REQUEST_ALL_PLACES_SUCCESS = "REQUEST_ALL_PLACES_SUCCESS";
export const REQUEST_ALL_PLACES_FAILED = "REQUEST_ALL_PLACES_FAILED";
export const REQUEST_ALL_PLACES = "REQUEST_ALL_PLACES";

export const requestAllPlacesSuccess = (dataFromServer) => {
  return {
    type: REQUEST_ALL_PLACES_SUCCESS,
    payload: dataFromServer,
  };
};

export const requestAllPlacesFailed = () => {
  return {
    type: REQUEST_ALL_PLACES_FAILED,
  };
};

export const requestAllPlaces = () => {
  return {
    type: REQUEST_ALL_PLACES,
  };
};

export const loadAllPlaces = () => {
  return {
    type: LOAD_ALL_PLACES,
  };
};
