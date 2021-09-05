import { connect, useDispatch } from "react-redux";
import { setAddComment } from "../../../redux/active/actions";
import { setPhotoFiles } from "../../../redux/modals/actions";
import { setAddPhoto } from "../../../redux/active/actions";
import { loadComments } from "../../../redux/comments/actions";

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
      loadComments={props.loadComments}
      profile={props.profile}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    addComment: state.active.addComment,
    addPhoto: state.active.addPhoto,
    photoFiles: state.modals.photoFiles,
    content: state.place.content,
    profile: state.auth.profile,
  };
};

const mapDispatchToProps = {
  setAddComment,
  setAddPhoto,
  setPhotoFiles,
  loadComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewModalContainer);
