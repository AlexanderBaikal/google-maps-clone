import PlacesUnderSearchBar from "./PlacesUnderSearchBar";
import { setActiveBar } from "../../../redux/active/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllPlaces } from "../../../redux/places/actions";
import { setDescriptionData } from "./../../../redux/place/actions";

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
    allPlaces: state.places.allPlaces,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
