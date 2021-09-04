export const SET_HISTORY_ITEMS = "SET_HISTORY_ITEMS";

export const setHistoryItems = (data) => {
  return {
    type: SET_HISTORY_ITEMS,
    payload: data,
  };
};
