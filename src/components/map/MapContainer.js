import Map from "./Map";
import { setZoomDelta } from "../../redux/actions";
import { connect } from "react-redux";
import { setOpenEditInfo } from "./../../redux/active/actions";
import { setContent, setContentSnapshot } from "./../../redux/place/actions";

const MapContainer = (props) => {
  return (
    <Map
      zoomDelta={props.zoomDelta}
      setZoomDelta={props.setZoomDelta}
      setOpenEditInfo={props.setOpenEditInfo}
      setContent={props.setContent}
      setContentSnapshot={props.setContentSnapshot}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    zoomDelta: state.app.zoomDelta,
  };
};

const mapDispatchToProps = {
  setZoomDelta,
  setOpenEditInfo,
  setContent,
  setContentSnapshot
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
