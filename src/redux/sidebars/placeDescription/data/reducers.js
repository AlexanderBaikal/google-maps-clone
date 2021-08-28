import {
  REQUEST_DATA,
  REQUEST_DATA_FAILED,
  REQUEST_DATA_SUCCESS,
  SET_DATA,
} from "./actions";

const defaultState = {
  content: null,
  loading: false,
  error: false,
};

export const dataReducer = (state = defaultState, action) => {
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
    case SET_DATA:
      return {
        ...state,
        content: action.payload,
      };
  }
  return state;
};
