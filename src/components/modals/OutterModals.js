import EditModalContainer from "./edit/EditModalContainer";

import { connect } from "react-redux";
import ModalContainer from "./editInfo/ModalContainer";
import { setOpenCompleteEditInfo, setOpenCompletePhoto } from "../../redux/active/actions";
import CompleteEditInfoModal from "./editInfo/CompleteEditInfoModal";
import ScheduleModalContainer from "./scheduleModal/ScheduleModalContainer";
import CompletePhotoModal from "./uploadPhoto/CompletePhotoModal";

const ModalsContainer = (props) => {
  return props.content ? (
    <>
      <ModalContainer /> <EditModalContainer />
      <ScheduleModalContainer />
      <CompleteEditInfoModal
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        openCompleteEditInfo={props.openCompleteEditInfo}
      />
      <CompletePhotoModal
        setOpenCompletePhoto={props.setOpenCompletePhoto}
        openCompletePhoto={props.openCompletePhoto}
      />
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    openCompleteEditInfo: state.active.openCompleteEditInfo,
    openCompletePhoto: state.active.openCompletePhoto
  };
};

const mapDispatchToProps = { setOpenCompleteEditInfo, setOpenCompletePhoto };

export default connect(mapStateToProps, mapDispatchToProps)(ModalsContainer);
