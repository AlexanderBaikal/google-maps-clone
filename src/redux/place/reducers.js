import {
  REQUEST_DATA,
  REQUEST_DATA_FAILED,
  REQUEST_DATA_SUCCESS,
  SET_CONTENT,
  SET_DESCRIPTION_DATA,
} from "./actions";

const defaultState = {
  content: null,
  loading: false,
  error: false,
  contentSnapshot: null,
  descriptionData: null,
};

const placeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        content: null,
        contentSnapshot: null,
        loading: true,
        error: false,
      };
    case REQUEST_DATA_SUCCESS:
      return {
        ...state,
        content: action.payload,
        contentSnapshot: JSON.parse(JSON.stringify(action.payload)),
        loading: false,
        error: false,
      };
    case REQUEST_DATA_FAILED:
      return {
        ...state,
        content: null,
        contentSnapshot: null,
        loading: false,
        error: true,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };

    case SET_DESCRIPTION_DATA:
      return {
        ...state,
        descriptionData: action.payload,
      };
  }
  return state;
};

export default placeReducer;
