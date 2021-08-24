export const SET_DESCRIPTION_DATA = "SET_DESCRIPTION_DATA";
export const SET_ADD_COMMENT = "SET_ADD_COMMENT";
export const SET_OPEN_EDIT = "SET_OPEN_EDIT";
export const SET_OPEN_UPLOAD_PHOTO = "SET_OPEN_UPLOAD_PHOTO";
export const SET_OPEN_COMPLETE_PHOTO = "SET_OPEN_COMPLETE_PHOTO";

export const setDescriptionData = (data) => {
  return {
    type: SET_DESCRIPTION_DATA,
    payload: data,
  };
};

export const setAddComment = (data) => {
  return {
    type: SET_ADD_COMMENT,
    payload: data,
  };
};

export const setOpenEdit = (data) => {
  return {
    type: SET_OPEN_EDIT,
    payload: data,
  };
};

export const setOpenUploadPhoto = (data) => {
  return {
    type: SET_OPEN_UPLOAD_PHOTO,
    payload: data,
  };
};

export const setOpenCompletePhoto = (data) => {
  return {
    type: SET_OPEN_COMPLETE_PHOTO,
    payload: data,
  };
};
