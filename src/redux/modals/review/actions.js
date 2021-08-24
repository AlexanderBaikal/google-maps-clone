export const SET_ADD_PHOTO = "SET_ADD_PHOTO";

export const setAddPhoto = (data) => {
  return {
    type: SET_ADD_PHOTO,
    payload: data,
  };
};
