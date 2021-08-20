import { combineReducers } from "redux";
import { MAIN_UNDERSEARCH_BAR, SET_ACTIVE_BAR } from "./actions";
import { descriptionBarReducer } from "./placeDescription/reducers";

const defaultState = {
  activeBar: MAIN_UNDERSEARCH_BAR,
};

export const activeBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BAR:
      return {
        ...state,
        activeBar: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  activeBar: activeBarReducer,
  descriptionBar: descriptionBarReducer,
});
