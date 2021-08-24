import { combineReducers } from "redux";
import { reviewModalReducer } from "./review/reducers";
import { uploadPhotoReducer } from "./uploadPhoto/reducers";

export default combineReducers({
  review: reviewModalReducer,
  uploadPhoto: uploadPhotoReducer,
});
