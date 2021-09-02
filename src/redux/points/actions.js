export const LOAD_ALL_POINTS = "LOAD_ALL_POINTS";

export const loadAllPoints = () => {
  return {
    type: LOAD_ALL_POINTS,
  };
};

export const REQUEST_ALL_POINTS_SUCCESS = "REQUEST_ALL_POINTS_SUCCESS";

export const requestAllPointsSuccess = (dataFromServer) => {
  return {
    type: REQUEST_ALL_POINTS_SUCCESS,
    payload: dataFromServer,
  };
};
export const REQUEST_ALL_POINTS_FAILED = "REQUEST_ALL_POINTS_FAILED";

export const requestAllPointsFailed = () => {
  return {
    type: REQUEST_ALL_POINTS_FAILED,
  };
};

export const REQUEST_ALL_POINTS = "REQUEST_ALL_POINTS";

export const requestAllPoints = () => {
  return {
    type: REQUEST_ALL_POINTS,
  };
};