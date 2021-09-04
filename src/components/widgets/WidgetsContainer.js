import Widgets from "./Widgets";
import { setZoomDelta } from "../../redux/actions";
import { connect } from "react-redux";

const WidgetsContainer = (props) => {
  return (
    <Widgets
      setZoomDelta={props.setZoomDelta}
      underSearchBar={props.underSearchBar}
      bottomGallery={props.bottomGallery}
      profile={props.profile}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.active.underSearchBar,
    bottomGallery: state.active.bottomGallery,
    profile: state.auth.profile
  };
};

const mapDispatchToProps = {
  setZoomDelta,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsContainer);
