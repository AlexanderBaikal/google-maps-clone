import {
  REQUEST_COMMENTS,
  REQUEST_COMMENTS_FAILED,
  REQUEST_COMMENTS_SUCCESS,
} from "./actions";

const defaultState = {
  all: null,
  loading: false,
  error: false,
};

const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        all: null,
        loading: true,
        error: false,
      };
    case REQUEST_COMMENTS_SUCCESS:
      return {
        ...state,
        all: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_COMMENTS_FAILED:
      return {
        ...state,
        all: null,
        loading: false,
        error: true,
      };
  }
  return state;
};

export default commentsReducer

