import { combineReducers } from "redux";
import {
  SET_UNDERSEARCH_BAR,
  SET_BOTTOM_GALLERY,
} from "./actions";
import { searchPromptReducer } from "./search/reducers";

const defaultState = {
  underSearchBar: false,
  bottomGallery: false,
};

export const widgetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_UNDERSEARCH_BAR:
      return {
        ...state,
        underSearchBar: !action.payload,
      };

    case SET_BOTTOM_GALLERY:
      return {
        ...state,
        bottomGallery: !action.payload,
      };
  }
  return state;
};

export default combineReducers({
  all: widgetsReducer,
  searchPrompt: searchPromptReducer,
});
