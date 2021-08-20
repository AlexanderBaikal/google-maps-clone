import { connect } from "react-redux";
import VerticalWidget from "./VerticalWidget";
import { setZoomDelta } from "../../../redux/actions";

const VerticalContainer = (props) => {
  return <VerticalWidget setZoomDelta={props.setZoomDelta} />;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setZoomDelta,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalContainer);
