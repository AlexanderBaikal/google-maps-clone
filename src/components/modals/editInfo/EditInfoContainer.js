import { connect } from "react-redux";
import EditInfoModal from "./EditInfoModal";
import {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
} from "./../../../redux/sidebars/placeDescription/actions";
import CompleteEditInfoModal from "./CompleteEditInfoModal";

const EditInfoContainer = (props) => {
  return (
    <>
      <EditInfoModal
        content={props.content}
        openEditInfo={props.openEditInfo}
        setOpenEditInfo={props.setOpenEditInfo}
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
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
    content: state.sidebars.descriptionBar.data.content,
    openEditInfo: state.sidebars.descriptionBar.main.openEditInfo,
    openCompleteEditInfo:
      state.sidebars.descriptionBar.main.openCompleteEditInfo,
  };
};

const mapDispatchToProps = { setOpenEditInfo, setOpenCompleteEditInfo };

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoContainer);
