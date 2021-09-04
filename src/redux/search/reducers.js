import { SET_HISTORY_ITEMS } from "./actions";

const defaultState = {
  historyItems: null,
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HISTORY_ITEMS:
      return {
        ...state,
        historyItems: action.payload,
      };
  }
  return state;
};

export default searchReducer;
