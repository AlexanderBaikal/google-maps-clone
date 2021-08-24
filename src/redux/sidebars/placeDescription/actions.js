export const SET_DESCRIPTION_DATA = "SET_DESCRIPTION_DATA";

export const setDescriptionData = (data) => {
  return {
    type: SET_DESCRIPTION_DATA,
    payload: data,
  };
};
