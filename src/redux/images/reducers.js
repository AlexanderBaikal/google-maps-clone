import {
  ALL,
  REQUEST_ALL_IMAGES,
  REQUEST_ALL_IMAGES_FAILED,
  REQUEST_ALL_IMAGES_SUCCESS,
  REQUEST_IMAGES,
  REQUEST_IMAGES_FAILED,
  REQUEST_IMAGES_SUCCESS,
  SET_IMAGES_TYPE,
} from "./actions";

const defaultState = {
  images: [],
  allImages: [],
  loading: false,
  error: false,
  imagesType: null
};

const imagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_IMAGES:
      return {
        ...state,
        images: [],
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
        images: [],
        loading: false,
        error: true,
      };
    case REQUEST_ALL_IMAGES:
      return {
        ...state,
        allImages: [],
        loading: true,
        error: false,
      };
    case REQUEST_ALL_IMAGES_SUCCESS:
      return {
        ...state,
        allImages: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_ALL_IMAGES_FAILED:
      return {
        ...state,
        allImages: [],
        loading: false,
        error: true,
      };
      case SET_IMAGES_TYPE:
        return {
          ...state,
          imagesType: action.payload,
        };
  }
  return state;
};

export default imagesReducer;
