import { connect } from "react-redux";
import {
  setOpenUploadPhoto,
  setOpenCompletePhoto,
} from "../../../redux/active/actions";
import UploadPhotoModal from "./UploadPhotoModal";

const UploadPhotoContainer = (props) => {
  return (
    <UploadPhotoModal
      addComment={props.addComment}
      setAddComment={props.setAddComment}
      openUploadPhoto={props.openUploadPhoto}
      setOpenUploadPhoto={props.setOpenUploadPhoto}
      setOpenCompletePhoto={props.setOpenCompletePhoto}
      keyword={props.keyword}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    openUploadPhoto: state.active.openUploadPhoto,
    keyword: state.place.content?.name || 'Add a photo',
  };
};

const mapDispatchToProps = {
  setOpenUploadPhoto,
  setOpenCompletePhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhotoContainer);
