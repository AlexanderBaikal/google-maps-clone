import { connect } from "react-redux";
import {
  setOpenEdit,
  setOpenEditInfo,
} from "../../../redux/active/actions";
import EditModal from "./EditModal";

const EditModalContainer = (props) => {
  return (
    <EditModal
      openEdit={props.openEdit}
      setOpenEdit={props.setOpenEdit}
      setOpenEditInfo={props.setOpenEditInfo}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    openEdit: state.active.openEdit,
  };
};

const mapDispatchToProps = {
  setOpenEdit,
  setOpenEditInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModalContainer);
