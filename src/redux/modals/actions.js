export const SET_PHOTO_FILES = "SET_PHOTO_FILES";

export const setPhotoFiles = (data) => {
  return {
    type: SET_PHOTO_FILES,
    payload: data,
  };
};

export const SET_SELECTED_WEEKDAYS = "SET_SELECTED_WEEKDAYS";

export const setSelectedWeekdays = (data) => {
  return {
    type: SET_SELECTED_WEEKDAYS,
    payload: data,
  };
};

export const SET_NEW_HOURS = "SET_NEW_HOURS";

export const setNewHours = (data) => {
  return {
    type: SET_NEW_HOURS,
    payload: data,
  };
};
