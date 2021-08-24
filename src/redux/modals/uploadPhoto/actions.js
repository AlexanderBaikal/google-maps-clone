export const SET_FILES = "SET_FILES";

export const setFiles = (data) => {
  return {
    type: SET_FILES,
    payload: data,
  };
};