export const LOAD_IMAGES = "LOAD_IMAGES";
export const REQUEST_IMAGES_SUCCESS = "REQUEST_IMAGES_SUCCESS";
export const REQUEST_IMAGES_FAILED = "REQUEST_IMAGES_FAILED";
export const REQUEST_IMAGES = "REQUEST_IMAGES";

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

export const loadImages = (data) => {
  return {
    type: LOAD_IMAGES,
    payload: data,
  };
};

export const LOAD_ALL_IMAGES = "LOAD_ALL_IMAGES";
export const REQUEST_ALL_IMAGES_SUCCESS = "REQUEST_ALL_IMAGES_SUCCESS";
export const REQUEST_ALL_IMAGES_FAILED = "REQUEST_ALL_IMAGES_FAILED";
export const REQUEST_ALL_IMAGES = "REQUEST_ALL_IMAGES";

export const requestAllImagesSuccess = (dataFromServer) => {
  return {
    type: REQUEST_ALL_IMAGES_SUCCESS,
    payload: dataFromServer,
  };
};

export const requestAllImagesFailed = () => {
  return {
    type: REQUEST_ALL_IMAGES_FAILED,
  };
};

export const requestAllImages = () => {
  return {
    type: REQUEST_ALL_IMAGES,
  };
};

export const loadAllImages = (data) => {
  return {
    type: LOAD_ALL_IMAGES,
    payload: data,
  };
};

export const SET_IMAGES_TYPE = "SET_IMAGES_TYPE";
export const TYPE_ALL = "TYPE_ALL";
export const TYPE_PLACE = "TYPE_PLACE";

export const setImagesType = (data) => {
  return {
    type: SET_IMAGES_TYPE,
    payload: data,
  };
};

export const SET_CURRENT_IMG = "SET_CURRENT_IMG";

export const setCurrentImg = (data) => {
  return {
    type: SET_CURRENT_IMG,
    payload: data,
  };
};
