import { connect } from "react-redux";
import {
  setOpenUploadPhoto,
  setOpenCompletePhoto,
} from "../../../redux/sidebars/placeDescription/actions";
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
    openUploadPhoto: state.sidebars.descriptionBar.main.openUploadPhoto,
    keyword: state.sidebars.descriptionBar.data.content.name,
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
