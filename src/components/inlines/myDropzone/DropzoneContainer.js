import { connect } from "react-redux";
import MyDropzone from "./MyDropzone";
import {setPhotoFiles} from './../../../redux/modals/actions'

const DropzoneContainer = (props) => {
  return (
    <MyDropzone
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
    keyword: state.place.content?.name || 'All',
  };
};

const mapDispatchToProps = {
  setPhotoFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneContainer);
