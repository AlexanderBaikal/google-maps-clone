import { connect } from "react-redux";
import { setContent } from "../../../redux/place/actions";
import EditLocationModal from "./EditLocationModal";
import { setLocationModal } from "./../../../redux/active/actions";

const EditLocationContainer = (props) => {
  return (
    <EditLocationModal
      content={props.content}
      setContent={props.setContent}
      setLocationModal={props.setLocationModal}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
  };
};

const mapDispatchToProps = { setContent, setLocationModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLocationContainer);
