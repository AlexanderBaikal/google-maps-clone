import { SET_SEARCH_PROMPT } from "./actions";

const defaultState = {
  searchPrompt: false,
};

export const searchPromptReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_PROMPT:
      return {
        ...state,
        searchPrompt: !action.payload,
      };
  }
  return state;
};
