import UnderSearchBar from "./UnderSearchBar";
import { setUndersearchBar, setPlacesBar } from "./../../redux/widgets/actions";
import { connect } from "react-redux";

const UnderSearchContainer = (props) => {
  return (
    <UnderSearchBar
      underSearchBar={props.underSearchBar}
      setUnderSearchBar={props.setUnderSearchBar}
      placesBar={props.placesBar}
      setPlacesBar={props.setPlacesBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.widgets.all.underSearchBar,
    placesBar: state.widgets.all.placesBar,
  };
};

const mapDispatchToProps = {
  setPlacesBar,
  setUndersearchBar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnderSearchContainer);
