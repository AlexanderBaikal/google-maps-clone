export const LOAD_DATA = "LOAD_DATA";
export const LOAD_IMAGES = "LOAD_IMAGES";
export const LOAD_PLACES = "LOAD_PLACES";

export const REQUEST_PLACES_SUCCESS = "REQUEST_PLACES_SUCCESS";
export const REQUEST_PLACES_FAILED = "REQUEST_PLACES_FAILED";
export const REQUEST_PLACES = "REQUEST_PLACES";

export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";
export const REQUEST_DATA_FAILED = "REQUEST_DATA_FAILED";
export const REQUEST_DATA = "REQUEST_DATA";

export const REQUEST_IMAGES_SUCCESS = "REQUEST_IMAGES_SUCCESS";
export const REQUEST_IMAGES_FAILED = "REQUEST_IMAGES_FAILED";
export const REQUEST_IMAGES = "REQUEST_IMAGES";

export const SET_DESCRIPTION_DATA = "SET_DESCRIPTION_DATA";

export const requestDataSuccess = (dataFromServer) => {
  return {
    type: REQUEST_DATA_SUCCESS,
    payload: dataFromServer,
  };
};

export const requestDataFailed = () => {
  return {
    type: REQUEST_DATA_FAILED,
  };
};

export const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data,
  };
};

// -------

export const requestImagesSuccess = (dataFromServer) => {
  return {
    type: REQUEST_IMAGES_SUCCESS,
    payload: dataFromServer,
  };
};

export const requesImagesFailed = () => {
  return {
    type: REQUEST_IMAGES_FAILED,
  };
};

export const requestImages = () => {
  return {
    type: REQUEST_IMAGES,
  };
};

export const loadImages = () => {
  return {
    type: LOAD_IMAGES,
  };
};

// -----

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

// -----

export const setDescriptionData = (data) => {
  return {
    type: SET_DESCRIPTION_DATA,
    payload: data,
  };
};
