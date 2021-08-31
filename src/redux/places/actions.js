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

export const LOAD_ALL_PLACES = "LOAD_ALL_PLACES";

export const loadAllPlaces = () => {
  return {
    type: LOAD_ALL_PLACES,
  };
};

export const REQUEST_ALL_PLACES_SUCCESS = "REQUEST_ALL_PLACES_SUCCESS";

export const requestAllPlacesSuccess = (dataFromServer) => {
  return {
    type: REQUEST_ALL_PLACES_SUCCESS,
    payload: dataFromServer,
  };
};
export const REQUEST_ALL_PLACES_FAILED = "REQUEST_ALL_PLACES_FAILED";

export const requestAllPlacesFailed = () => {
  return {
    type: REQUEST_ALL_PLACES_FAILED,
  };
};

export const REQUEST_ALL_PLACES = "REQUEST_ALL_PLACES";

export const requestAllPlaces = () => {
  return {
    type: REQUEST_ALL_PLACES,
  };
};
