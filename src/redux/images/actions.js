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

export const loadImages = (data = "All") => {
  return {
    type: LOAD_IMAGES,
    payload: data,
  };
};
