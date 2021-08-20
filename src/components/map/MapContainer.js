import Map from "./Map";
import { setZoomDelta } from "../../redux/actions";
import { connect } from "react-redux";

const MapContainer = (props) => {
  return <Map zoomDelta={props.zoomDelta} setZoomDelta={props.setZoomDelta} />;
};

const mapStateToProps = (state) => {
  return {
    zoomDelta: state.app.zoomDelta,
  };
};

const mapDispatchToProps = {
  setZoomDelta,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
