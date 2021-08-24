import { combineReducers } from "redux";
import { SET_DESCRIPTION_DATA } from "./actions";
import { commentsReducer } from "./comments/reducers";
import { dataReducer } from "./data/reducers";
import { imagesReducer } from "./images/reducers";
import { placesReducer } from "./places/reducers";

const defaultState = {
  loading: false,
  descriptionData: null,
  error: false,
};

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
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

export default combineReducers({
  comments: commentsReducer,
  main: mainReducer,
  places: placesReducer,
  images: imagesReducer,
  data: dataReducer,
});
