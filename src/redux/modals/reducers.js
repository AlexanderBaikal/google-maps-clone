import {
  SET_PHOTO_FILES,
  SET_SELECTED_WEEKDAYS,
  SET_NEW_HOURS,
} from "./actions";

const defaultState = {
  photoFiles: [],
  selectedWeekdays: [],
  newHours: null, // JSON.parse(JSON.stringify(props.content.schedule)
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PHOTO_FILES:
      return {
        ...state,
        photoFiles: action.payload,
      };


    case SET_SELECTED_WEEKDAYS:
      return {
        ...state,
        selectedWeekdays: action.payload,
      };

    case SET_NEW_HOURS:
      return {
        ...state,
        newHours: action.payload,
      };
  }
  return state;
};

export default modalReducer;
