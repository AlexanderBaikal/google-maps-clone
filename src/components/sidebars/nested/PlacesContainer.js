import PlacesUnderSearchBar from "./PlacesUnderSearchBar";
import { setActiveBar } from "../../../redux/sidebars/actions";
import { connect } from "react-redux";

const PlacesContainer = (props) => {
  return <PlacesUnderSearchBar setActiveBar={props.setActiveBar} />;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setActiveBar,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
