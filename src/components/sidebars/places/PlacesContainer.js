import PlacesUnderSearchBar from "./PlacesUnderSearchBar";
import { setActiveBar } from "../../../redux/active/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllPlaces } from "../../../redux/places/actions";
import { setDescriptionData, setContent } from "./../../../redux/place/actions";

const PlacesContainer = (props) => {
  return (
    <PlacesUnderSearchBar
      setActiveBar={props.setActiveBar}
      allPlaces={props.allPlaces}
      setDescriptionData={props.setDescriptionData}
      anyLoading={props.anyLoading}
      content={props.content}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    allPlaces: state.places.allPlaces,
    anyLoading: state.places.loading || state.place.loading,
    content: state.place.content,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
