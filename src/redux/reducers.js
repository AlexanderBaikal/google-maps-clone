import widgetReducer from "./widgets/reducers";

import { combineReducers } from "redux";
import { SET_MENU_SIDEBAR } from "./actions";
import { SET_ZOOM_DELTA } from "./actions";
import sidebarBarReducer from './sidebars/reducers';

const defaultState = {
  menuSidebar: false,
  zoomDelta: 0,
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MENU_SIDEBAR:
      return {
        ...state,
        menuSidebar: !action.payload,
      };
    case SET_ZOOM_DELTA:
      return {
        ...state,
        zoomDelta: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  widgets: widgetReducer,
  app: appReducer,
  sidebars: sidebarBarReducer
});
