import { connect } from "react-redux";
import { setAddComment } from "../../../redux/active/actions";
import { setPhotoFiles } from "../../../redux/modals/actions";
import { setAddPhoto } from "../../../redux/active/actions";

import ReviewModal from "./ReviewModal";

const ReviewModalContainer = (props) => {
  return (
    <ReviewModal
      addComment={props.addComment}
      setAddComment={props.setAddComment}
      addPhoto={props.addPhoto}
      setAddPhoto={props.setAddPhoto}
      photoFiles={props.photoFiles}
      setPhotoFiles={props.setPhotoFiles}
      content={props.content}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    addComment: state.active.addComment,
    addPhoto: state.active.addPhoto,
    photoFiles: state.modals.photoFiles,
    content: state.place.content,
  };
};

const mapDispatchToProps = {
  setAddComment,
  setAddPhoto,
  setPhotoFiles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewModalContainer);
