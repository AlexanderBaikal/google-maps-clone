import { connect } from "react-redux";
import {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
} from "./../../../redux/active/actions";
import { setContent } from "../../../redux/place/actions";
import CompleteEditInfoModal from "../editInfo/CompleteEditInfoModal";
import { setPhotoFiles, setNewHours } from "../../../redux/modals/actions";
import { setCategoryModal, setHoursModal } from "../../../redux/active/actions";
import { loadAllPoints } from "../../../redux/points/actions";
import { setLocationModal } from "../../../redux/active/actions";
import EditInfoContent from "./EditInfoContent";

const EditInfoContainer = (props) => {
  return (
    <EditInfoContent
      content={props.content}
      contentSnapshot={props.contentSnapshot}
      setOpenEditInfo={props.setOpenEditInfo}
      setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
      categoryModal={props.categoryModal}
      setCategoryModal={props.setCategoryModal}
      setHoursModal={props.setHoursModal}
      setNewHours={props.setNewHours}
      setContent={props.setContent}
      allPlaces={props.allPlaces}
      photoFiles={props.photoFiles}
      setPhotoFiles={props.setPhotoFiles}
      loadAllPoints={props.loadAllPoints}
      setLocationModal={props.setLocationModal}
      profile={props.profile}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    openCompleteEditInfo: state.active.openCompleteEditInfo,
    contentSnapshot: state.place.contentSnapshot,
    allPlaces: state.places.allPlaces,
    photoFiles: state.modals.photoFiles,
    categoryModal: state.active.categoryModal,
    profile: state.auth.profile,
  };
};

const mapDispatchToProps = {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
  setContent,
  setPhotoFiles,
  setCategoryModal,
  setNewHours,
  setHoursModal,
  loadAllPoints,
  setLocationModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoContainer);
