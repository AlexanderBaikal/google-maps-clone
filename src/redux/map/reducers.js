import { SET_PLACE_POSITION } from "./actions";

const defaultState = {
  coords: null,
};

const mapReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PLACE_POSITION:
      return {
        ...state,
        coords: action.payload,
        loading: true,
        error: false,
      };
  }
  return state;
};

export default mapReducer;
