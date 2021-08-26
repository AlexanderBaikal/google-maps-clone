import { combineReducers } from "redux";
import {
  SET_ADD_COMMENT,
  SET_DESCRIPTION_DATA,
  SET_OPEN_COMPLETE_EDIT_INFO,
  SET_OPEN_COMPLETE_PHOTO,
  SET_OPEN_EDIT,
  SET_OPEN_EDIT_INFO,
  SET_OPEN_UPLOAD_PHOTO,
} from "./actions";
import { commentsReducer } from "./comments/reducers";
import { dataReducer } from "./data/reducers";
import { imagesReducer } from "./images/reducers";
import { placesReducer } from "./places/reducers";

const defaultState = {
  descriptionData: null,
  addComment: false,
  openEdit: false,
  openEditInfo: false,
  openCompleteEditInfo: false,
  openUploadPhoto: false,
  openCompletePhoto: false,
};

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DESCRIPTION_DATA:
      return {
        ...state,
        descriptionData: action.payload,
      };
    case SET_ADD_COMMENT:
      return {
        ...state,
        addComment: action.payload,
      };
    case SET_OPEN_EDIT:
      return {
        ...state,
        openEdit: action.payload,
      };
    case SET_OPEN_EDIT_INFO:
      return {
        ...state,
        openEditInfo: action.payload,
      };
    case SET_OPEN_COMPLETE_EDIT_INFO:
      return {
        ...state,
        openCompleteEditInfo: action.payload,
      };
    case SET_OPEN_UPLOAD_PHOTO:
      return {
        ...state,
        openUploadPhoto: action.payload,
      };
    case SET_OPEN_COMPLETE_PHOTO:
      return {
        ...state,
        openCompletePhoto: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  comments: commentsReducer,
  main: mainReducer,
  places: placesReducer,
  images: imagesReducer,
  data: dataReducer,
});
