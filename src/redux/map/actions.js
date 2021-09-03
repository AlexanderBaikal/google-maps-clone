export const SET_PLACE_POSITION = "SET_PLACE_POSITION";

export const setPlacePosition = (dataFromServer) => {
  return {
    type: SET_PLACE_POSITION,
    payload: dataFromServer,
  };
};
