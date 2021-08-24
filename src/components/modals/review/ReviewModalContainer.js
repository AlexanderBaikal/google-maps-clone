import { connect } from "react-redux";
import { setAddComment } from "../../../redux/sidebars/placeDescription/actions";
import { setAddPhoto } from "../../../redux/modals/review/actions";
import { setFiles } from "../../../redux/modals/uploadPhoto/actions";

import ReviewModal from "./ReviewModal";

const ReviewModalContainer = (props) => {
  return (
    <ReviewModal
      addComment={props.addComment}
      setAddComment={props.setAddComment}
      addPhoto={props.addPhoto}
      setAddPhoto={props.setAddPhoto}
      files={props.files}
      setFiles={props.setFiles}
      content={props.content}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    addComment: state.sidebars.descriptionBar.main.addComment,
    addPhoto: state.modals.review.addPhoto,
    files: state.modals.uploadPhoto.files,
    content: state.sidebars.descriptionBar.data.content,
  };
};

const mapDispatchToProps = {
  setAddComment,
  setAddPhoto,
  setFiles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewModalContainer);
