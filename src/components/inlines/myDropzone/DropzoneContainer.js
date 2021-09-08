import { connect } from "react-redux";
import MyDropzone from "./MyDropzone";
import { setPhotoFiles } from "./../../../redux/modals/actions";
import {
  setOpenUploadPhoto,
  setOpenCompletePhoto,
} from "./../../../redux/active/actions";

const DropzoneContainer = (props) => {
  return (
    <MyDropzone
      openUploadPhoto={props.openUploadPhoto}
      photoFiles={props.photoFiles}
      setPhotoFiles={props.setPhotoFiles}
      setOpenUploadPhoto={props.setOpenUploadPhoto}
      setOpenCompletePhoto={props.setOpenCompletePhoto}
      content={props.content}
      profile={props.profile}
      contentSnapshot={props.contentSnapshot}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    photoFiles: state.modals.photoFiles,
    openUploadPhoto: state.active.openUploadPhoto,
    content: state.place.content,
    profile: state.auth.profile,
    contentSnapshot: state.place.contentSnapshot,
  };
};

const mapDispatchToProps = {
  setPhotoFiles,
  setOpenUploadPhoto,
  setOpenCompletePhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneContainer);
