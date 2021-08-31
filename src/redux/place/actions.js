export const LOAD_DATA = "LOAD_DATA";
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";
export const REQUEST_DATA_FAILED = "REQUEST_DATA_FAILED";
export const REQUEST_DATA = "REQUEST_DATA";
export const SET_CONTENT = "SET_CONTENT"

export const requestDataSuccess = (dataFromServer) => {
  return {
    type: REQUEST_DATA_SUCCESS,
    payload: dataFromServer,
  };
};

export const requestDataFailed = () => {
  return {
    type: REQUEST_DATA_FAILED,
  };
};

export const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data,
  };
};

export const setContent = (data) => {
  return {
    type: SET_CONTENT,
    payload: data,
  };
};

export const SET_DESCRIPTION_DATA = "SET_DESCRIPTION_DATA";

export const setDescriptionData = (data) => {
  return {
    type: SET_DESCRIPTION_DATA,
    payload: data,
  };
};

