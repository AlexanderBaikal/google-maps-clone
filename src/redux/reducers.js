import { combineReducers } from "redux";
import { SET_ZOOM_DELTA } from "./actions";
import modalReducer from "./modals/reducers";
import activeReducer from "./active/reducers";
import commentsReducer from "./comments/reducers";
import placeReducer from "./place/reducers";
import placesReducer from "./places/reducers";
import imagesReducer from "./images/reducers";
import pointsReducer from "./points/reducers";

const defaultState = {
  zoomDelta: 0,
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ZOOM_DELTA:
      return {
        ...state,
        zoomDelta: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  app: appReducer,
  modals: modalReducer,
  active: activeReducer,
  comments: commentsReducer,
  place: placeReducer,
  places: placesReducer,
  images: imagesReducer,
  points: pointsReducer
});
