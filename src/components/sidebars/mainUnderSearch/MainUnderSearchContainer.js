import MainUnderSearchBar from "./MainUnderSearchBar";
import { setUnderSearchBar } from "../../../redux/active/actions";
import { setActiveBar } from "../../../redux/active/actions";
import { setPlacePosition } from "../../../redux/map/actions";
import { connect } from "react-redux";
import { setSearchPrompt } from "./../../../redux/active/actions";
import { setPlacesData } from "./../../../redux/places/actions";


const MainUnderSearchContainer = (props) => {
  return (
    <MainUnderSearchBar
      underSearchBar={props.underSearchBar}
      setUnderSearchBar={props.setUnderSearchBar}
      setActiveBar={props.setActiveBar}
      anyPlaces={props.anyPlaces}
      setPlacePosition={props.setPlacePosition}
      setSearchPrompt={props.setSearchPrompt}
      setPlacesData={props.setPlacesData}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.active.underSearchBar,
    activeBar: state.active.activeBar,
    anyPlaces: state.places.anyPlaces,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setUnderSearchBar,
  setPlacePosition,
  setSearchPrompt,
  setPlacesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUnderSearchContainer);
