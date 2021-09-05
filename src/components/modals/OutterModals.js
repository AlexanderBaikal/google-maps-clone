import EditModalContainer from "./edit/EditModalContainer";

import { connect } from "react-redux";
import ModalContainer from "./editInfo/ModalContainer";
import { setOpenCompleteEditInfo } from "../../redux/active/actions";
import CompleteEditInfoModal from "./editInfo/CompleteEditInfoModal";

const ModalsContainer = (props) => {
  return props.content ? (
    <>
      <ModalContainer /> <EditModalContainer />
      <CompleteEditInfoModal
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        openCompleteEditInfo={props.openCompleteEditInfo}
      />
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    openCompleteEditInfo: state.active.openCompleteEditInfo,
  };
};

const mapDispatchToProps = { setOpenCompleteEditInfo };

export default connect(mapStateToProps, mapDispatchToProps)(ModalsContainer);
