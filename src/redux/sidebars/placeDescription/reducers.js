import {
  REQUEST_DATA,
  REQUEST_DATA_FAILED,
  REQUEST_DATA_SUCCESS,
} from "./actions";

const defaultState = {
  content: null,
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
  }
  return state;
};
