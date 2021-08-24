import { SET_ADD_PHOTO } from "./actions";

const defaultState = {
  addPhoto: false,
};

export const reviewModalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADD_PHOTO:
      return {
        ...state,
        addPhoto: action.payload,
      };
  }
  return state;
};
