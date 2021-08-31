import { connect } from "react-redux";
import ScheduleModal from "../scheduleModal/ScheduleModal";
import {
  setSelectedWeekdays,
  setNewHours,
} from "./../../../redux/modals/actions";
import { setScheduleModal } from "./../../../redux/active/actions";

const ScheduleModalContainer = (props) => {
  return (
    <ScheduleModal
      scheduleModal={props.scheduleModal}
      setScheduleModal={props.setScheduleModal}
      selectedWeekdays={props.selectedWeekdays}
      setSelectedWeekdays={props.setSelectedWeekdays}
      newHours={
        props.newHours || JSON.parse(JSON.stringify(props.content.schedule))
      }
      setNewHours={props.setNewHours}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    newHours: state.modals.newHours,
    selectedWeekdays: state.modals.selectedWeekdays,
    scheduleModal: state.active.scheduleModal,
  };
};

const mapDispatchToProps = {
  setSelectedWeekdays,
  setScheduleModal,
  setNewHours,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleModalContainer);
