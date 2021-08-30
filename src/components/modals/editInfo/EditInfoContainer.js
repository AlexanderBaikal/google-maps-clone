import { connect } from "react-redux";
import EditInfoModal from "./EditInfoModal";
import {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
} from "./../../../redux/sidebars/placeDescription/actions";
import { setData } from "./../../../redux/sidebars/placeDescription/data/actions";
import CompleteEditInfoModal from "./CompleteEditInfoModal";
import EditCategory from "./EditCategory";
import { useState } from "react";
import EditHoursModal from "./EditHoursModal";
import ScheduleModal from "./ScheduleModal";
import { setFiles } from "../../../redux/modals/uploadPhoto/actions";

const EditInfoContainer = (props) => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [hoursModal, setHoursModal] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [newHours, setNewHours] = useState(
    JSON.parse(JSON.stringify(props.content.schedule))
  );

  return (
    <>
      <EditInfoModal
        content={props.content}
        contentSnapshot={props.contentSnapshot}
        openEditInfo={props.openEditInfo}
        setOpenEditInfo={props.setOpenEditInfo}
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
        setHoursModal={setHoursModal}
        setNewHours={setNewHours}
        setData={props.setData}
        allPlaces={props.allPlaces}
        files={props.files}
        setFiles={props.setFiles}
      />
      <CompleteEditInfoModal
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        openCompleteEditInfo={props.openCompleteEditInfo}
      />
      <EditCategory
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
        setData={props.setData}
        content={props.content}
      />
      <EditHoursModal
        content={props.content}
        setData={props.setData}
        hoursModal={hoursModal}
        setHoursModal={setHoursModal}
        setScheduleModal={setScheduleModal}
        contentSnapshot={props.contentSnapshot}
        setSelectedDays={setSelectedDays}
        newHours={newHours}
        setNewHours={setNewHours}
        files={props.files}
        setFiles={props.setFiles}
      />
      <ScheduleModal
        scheduleModal={scheduleModal}
        setScheduleModal={setScheduleModal}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        newHours={newHours}
        setNewHours={setNewHours}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.sidebars.descriptionBar.data.content,
    openEditInfo: state.sidebars.descriptionBar.main.openEditInfo,
    openCompleteEditInfo:
      state.sidebars.descriptionBar.main.openCompleteEditInfo,
    contentSnapshot: state.sidebars.descriptionBar.data.contentSnapshot,
    allPlaces: state.sidebars.placesBar.allPlaces,
    files: state.modals.uploadPhoto.files,
  };
};

const mapDispatchToProps = {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
  setData,
  setFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoContainer);
