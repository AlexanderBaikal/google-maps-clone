import { connect } from "react-redux";
import { setContent } from "../../../redux/place/actions";
import EditHoursModal from "../editHours/EditHoursModal";
import { setPhotoFiles } from "../../../redux/modals/actions";
import {
  setSelectedWeekdays,
  setNewHours,
} from "./../../../redux/modals/actions";
import {
  setScheduleModal,
  setHoursModal,
} from "./../../../redux/active/actions";

const EditHoursContainer = (props) => {
  return (
    <EditHoursModal
      content={props.content}
      setContent={props.setContent}
      setHoursModal={props.setHoursModal}
      setScheduleModal={props.setScheduleModal}
      contentSnapshot={props.contentSnapshot}
      setSelectedWeekdays={props.setSelectedWeekdays}
      newHours={
        props.newHours || JSON.parse(JSON.stringify(props.content.schedule))
      }
      setNewHours={props.setNewHours}
      photoFiles={props.photoFiles}
      setPhotoFiles={props.setPhotoFiles}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    contentSnapshot: state.place.contentSnapshot,
    photoFiles: state.modals.photoFiles,
    newHours: state.modals.newHours,
  };
};

const mapDispatchToProps = {
  setContent,
  setPhotoFiles,
  setSelectedWeekdays,
  setScheduleModal,
  setNewHours,
  setHoursModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHoursContainer);
