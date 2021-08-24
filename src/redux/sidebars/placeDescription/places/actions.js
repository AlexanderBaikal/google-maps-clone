export const LOAD_PLACES = "LOAD_PLACES";

export const REQUEST_PLACES_SUCCESS = "REQUEST_PLACES_SUCCESS";
export const REQUEST_PLACES_FAILED = "REQUEST_PLACES_FAILED";
export const REQUEST_PLACES = "REQUEST_PLACES";
export const requestPlacesSuccess = (dataFromServer) => {
  return {
    type: REQUEST_PLACES_SUCCESS,
    payload: dataFromServer,
  };
};

export const requestPlacesFailed = () => {
  return {
    type: REQUEST_PLACES_FAILED,
  };
};

export const requestPlaces = () => {
  return {
    type: REQUEST_PLACES,
  };
};

export const loadPlaces = (refs) => {
  return {
    type: LOAD_PLACES,
    payload: refs,
  };
};
