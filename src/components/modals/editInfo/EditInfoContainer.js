import { connect } from "react-redux";
import EditInfoModal from "../editInfo/EditInfoModal";
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


const EditInfoContainer = (props) => {
  return (
    <>
      <EditInfoModal
        content={props.content}
        contentSnapshot={props.contentSnapshot}
        openEditInfo={props.openEditInfo}
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
      />
      <CompleteEditInfoModal
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        openCompleteEditInfo={props.openCompleteEditInfo}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    openEditInfo: state.active.openEditInfo,
    openCompleteEditInfo:
      state.active.openCompleteEditInfo,
    contentSnapshot: state.place.contentSnapshot,
    allPlaces: state.places.allPlaces,
    photoFiles: state.modals.photoFiles,
    categoryModal: state.active.categoryModal,
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
  setLocationModal
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoContainer);
