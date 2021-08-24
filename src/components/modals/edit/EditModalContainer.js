import { connect } from "react-redux";
import { setOpenEdit } from "../../../redux/sidebars/placeDescription/actions";
import EditModal from "./EditModal";

const EditModalContainer = (props) => {
  return (
    <EditModal openEdit={props.openEdit} setOpenEdit={props.setOpenEdit} />
  );
};

const mapStateToProps = (state) => {
  return {
    openEdit: state.sidebars.descriptionBar.main.openEdit,
  };
};

const mapDispatchToProps = {
  setOpenEdit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModalContainer);
