import PlacesUnderSearchBar from "./PlacesUnderSearchBar";
import { setActiveBar } from "../../../redux/sidebars/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllPlaces } from "../../../redux/sidebars/placesBar/actions";
import { setDescriptionData } from "./../../../redux/sidebars/placeDescription/actions";

const PlacesContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPlaces());
  }, []);

  return (
    <PlacesUnderSearchBar
      setActiveBar={props.setActiveBar}
      allPlaces={props.allPlaces}
      setDescriptionData={props.setDescriptionData}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    allPlaces: state.sidebars.placesBar.allPlaces,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
