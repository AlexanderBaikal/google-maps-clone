import Widgets from "./Widgets";
import { setZoomDelta } from "../../redux/actions";
import { connect } from "react-redux";

const WidgetsContainer = (props) => {
  return (
    <Widgets
      setZoomDelta={props.setZoomDelta}
      underSearchBar={props.underSearchBar}
      bottomGallery={props.bottomGallery}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.widgets.all.underSearchBar,
    bottomGallery: state.widgets.all.bottomGallery,
  };
};

const mapDispatchToProps = {
  setZoomDelta,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsContainer);
