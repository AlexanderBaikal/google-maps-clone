import { combineReducers } from "redux";
import {
  REQUEST_COMMENTS,
  REQUEST_COMMENTS_FAILED,
  REQUEST_COMMENTS_SUCCESS,
} from "./actions";

const defaultState = {
  comments: null,
  loading: false,
  error: false,
};

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        comments: null,
        loading: true,
        error: false,
      };
    case REQUEST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_COMMENTS_FAILED:
      return {
        ...state,
        comments: null,
        loading: false,
        error: true,
      };
  }
  return state;
};


