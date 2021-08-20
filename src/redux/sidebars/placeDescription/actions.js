export const LOAD_DATA = "LOAD_DATA";
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";
export const REQUEST_DATA_FAILED = "REQUEST_DATA_FAILED";
export const REQUEST_DATA = "REQUEST_DATA";

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


export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};

