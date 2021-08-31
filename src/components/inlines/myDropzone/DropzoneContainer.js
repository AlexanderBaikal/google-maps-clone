import { connect } from "react-redux";
import MyDropzone from "./MyDropzone";
import {setPhotoFiles} from './../../../redux/modals/actions'

const DropzoneContainer = (props) => {
  return (
    <MyDropzone
      onComplete={props.onComplete}
      openUploadPhoto={props.openUploadPhoto}
      photoFiles={props.photoFiles}
      setPhotoFiles={props.setPhotoFiles}
      keyword={props.keyword}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    photoFiles: state.modals.photoFiles,
    openUploadPhoto: state.active.openUploadPhoto,
    keyword: state.place.content.name,
  };
};

const mapDispatchToProps = {
  setPhotoFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneContainer);
