import { connect } from "react-redux";
import EditInfoModal from "./EditInfoModal";

const ModalContainer = (props) => {
  return (
    <EditInfoModal
      openEditInfo={props.openEditInfo}
      categoryModal={props.categoryModal}
      hoursModal={props.hoursModal}
      locationModal={props.locationModal}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    openEditInfo: state.active.openEditInfo,
    categoryModal: state.active.categoryModal,
    hoursModal: state.active.hoursModal,
    locationModal: state.active.locationModal,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
