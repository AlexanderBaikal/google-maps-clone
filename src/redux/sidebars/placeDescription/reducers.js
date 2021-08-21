import {
  REQUEST_DATA,
  REQUEST_DATA_FAILED,
  REQUEST_DATA_SUCCESS,
  REQUEST_IMAGES,
  REQUEST_IMAGES_FAILED,
  REQUEST_IMAGES_SUCCESS,
  REQUEST_PLACES,
  REQUEST_PLACES_FAILED,
  REQUEST_PLACES_SUCCESS,
  SET_DESCRIPTION_DATA,
} from "./actions";

const defaultState = {
  content: null,
  images: null,
  descriptionData: null,
  places: null,
  loading: false,
  error: false,
};

export const descriptionBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        content: null,
        loading: true,
        error: false,
      };
    case REQUEST_DATA_SUCCESS:
      return {
        ...state,
        content: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_DATA_FAILED:
      return {
        ...state,
        content: null,
        loading: false,
        error: true,
      };
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
    case REQUEST_PLACES:
      return {
        ...state,
        places: null,
        loading: true,
        error: false,
      };
    case REQUEST_PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_PLACES_FAILED:
      return {
        ...state,
        places: null,
        loading: false,
        error: true,
      };
    case SET_DESCRIPTION_DATA:
      return {
        ...state,
        descriptionData: action.payload,
        loading: false,
        error: true,
      };
  }
  return state;
};
