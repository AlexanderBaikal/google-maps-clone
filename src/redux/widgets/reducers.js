import { combineReducers } from "redux";
import {
  SET_MENU_SIDEBAR,
  SET_PLACES_BAR,
  SET_UNDERSEARCH_BAR,
  SET_BOTTOM_GALLERY,
} from "./actions";
import { searchPromptReducer } from "./search/reducers";

const defaultState = {
  placesBar: false,
  underSearchBar: false,
  menuSidebar: false,
  bottomGallery: false,
};

export const widgetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PLACES_BAR:
      return {
        ...state,
        placesBar: action.payload,
      };
    case SET_UNDERSEARCH_BAR:
      return {
        ...state,
        underSearchBar: action.payload,
      };
    case SET_MENU_SIDEBAR:
      return {
        ...state,
        menuSidebar: action.payload,
      };
    case SET_BOTTOM_GALLERY:
      return {
        ...state,
        bottomGallery: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  all: widgetsReducer,
  searchPrompt: searchPromptReducer,
});
