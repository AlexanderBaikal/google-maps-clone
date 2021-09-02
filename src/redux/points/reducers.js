import {
  REQUEST_ALL_POINTS,
  REQUEST_ALL_POINTS_FAILED,
  REQUEST_ALL_POINTS_SUCCESS,
} from "./actions";

const defaultState = {
  all: null,
  loading: false,
  error: false,
};

const pointsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ALL_POINTS:
      return {
        ...state,
        all: null,
        loading: true,
        error: false,
      };
    case REQUEST_ALL_POINTS_SUCCESS:
      return {
        ...state,
        all: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_ALL_POINTS_FAILED:
      return {
        ...state,
        all: null,
        loading: false,
        error: true,
      };
  }
  return state;
};

export default pointsReducer;
