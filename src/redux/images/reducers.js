import {
  REQUEST_IMAGES,
  REQUEST_IMAGES_FAILED,
  REQUEST_IMAGES_SUCCESS,
} from "./actions";

const defaultState = {
  images: null,
  loading: false,
  error: false,
};

const imagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_IMAGES:
      return {
        ...state,
        images: null,
        loading: true,
        error: false,
      };
    case REQUEST_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_IMAGES_FAILED:
      return {
        ...state,
        images: null,
        loading: false,
        error: true,
      };
  }
  return state;
};

export default imagesReducer;
