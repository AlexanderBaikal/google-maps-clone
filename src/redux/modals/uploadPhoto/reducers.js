import { SET_FILES } from "./actions";

const defaultState = {
  files: [],
};

export const uploadPhotoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILES:
      return {
        ...state,
        files: action.payload,
      };
  }
  return state;
};
