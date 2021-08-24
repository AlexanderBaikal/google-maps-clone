export const REQUEST_COMMENTS_SUCCESS = "REQUEST_COMMENTS_SUCCESS";
export const REQUEST_COMMENTS_FAILED = "REQUEST_COMMENTS_FAILED";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const LOAD_COMMENTS = "LOAD_COMMENTS";

export const requestCommentsSuccess = (dataFromServer) => {
  return {
    type: REQUEST_COMMENTS_SUCCESS,
    payload: dataFromServer,
  };
};

export const requestCommentsFailed = () => {
  return {
    type: REQUEST_COMMENTS_FAILED,
  };
};

export const requestComments = () => {
  return {
    type: REQUEST_COMMENTS,
  };
};

export const loadComments = (data) => {
  return {
    type: LOAD_COMMENTS,
    payload: data,
  };
};
