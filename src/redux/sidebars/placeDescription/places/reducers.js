import {
  REQUEST_PLACES,
  REQUEST_PLACES_FAILED,
  REQUEST_PLACES_SUCCESS,
} from "./actions";

const defaultState = {
  places: null,
  loading: false,
  error: false,
};

export const placesReducer = (state = defaultState, action) => {
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
  }
  return state;
};
