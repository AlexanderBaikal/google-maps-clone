import {
  LOAD_ALL_PLACES,
  REQUEST_ALL_PLACES,
  REQUEST_ALL_PLACES_FAILED,
  REQUEST_ALL_PLACES_SUCCESS,
} from "./actions";

const defaultState = {
  allPlaces: null,
  loading: false,
  error: false,
};

export const placesBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ALL_PLACES:
      return {
        ...state,
        allPlaces: null,
        loading: true,
        error: false,
      };
    case REQUEST_ALL_PLACES_SUCCESS:
      return {
        ...state,
        allPlaces: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_ALL_PLACES_FAILED:
      return {
        ...state,
        allPlaces: null,
        loading: false,
        error: true,
      };
  }
  return state;
};
