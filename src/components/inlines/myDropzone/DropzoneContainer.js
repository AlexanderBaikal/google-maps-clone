import { connect } from "react-redux";
import MyDropzone from "./MyDropzone";
import {setFiles} from './../../../redux/modals/uploadPhoto/actions'

const DropzoneContainer = (props) => {
  return (
    <MyDropzone
      onComplete={props.onComplete}
      openUploadPhoto={props.openUploadPhoto}
      files={props.files}
      setFiles={props.setFiles}
      keyword={props.keyword}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    files: state.modals.uploadPhoto.files,
    openUploadPhoto: state.sidebars.descriptionBar.main.openUploadPhoto,
    keyword: state.sidebars.descriptionBar.data.content.name,
  };
};

const mapDispatchToProps = {
  setFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneContainer);
