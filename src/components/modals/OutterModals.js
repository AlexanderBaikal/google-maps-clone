import EditModalContainer from "./edit/EditModalContainer";
import EditInfoContainer from "./editInfo/EditInfoContainer";
import EditCategoryContainer from "./editCategory/EditCategoryContainer";
import ScheduleModalContainer from "./scheduleModal/ScheduleModalContainer";
import EditHoursContainer from "./editHours/EditHoursContainer";
import { connect } from "react-redux";
import EditLocationContainer from "./editLocation/EditLocationContainer";

const ModalsContainer = (props) => {
  return props.content ? (
    <>
      <EditModalContainer />
      <EditInfoContainer />
      <EditCategoryContainer />
      <ScheduleModalContainer />
      <EditHoursContainer />
      <EditLocationContainer/>
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalsContainer);
