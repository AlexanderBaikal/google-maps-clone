import {
  REQUEST_PLACES,
  REQUEST_PLACES_FAILED,
  REQUEST_PLACES_SUCCESS,
  REQUEST_ALL_PLACES,
  REQUEST_ALL_PLACES_FAILED,
  REQUEST_ALL_PLACES_SUCCESS,
} from "./actions";

const defaultState = {
  places: null,
  allPlaces: null,
  loading: false,
  error: false,
};

const placesReducer = (state = defaultState, action) => {
  switch (action.type) {
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

export default placesReducer;
