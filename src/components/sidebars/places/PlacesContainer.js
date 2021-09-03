import PlacesUnderSearchBar from "./PlacesUnderSearchBar";
import { setActiveBar } from "../../../redux/active/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllPlaces } from "../../../redux/places/actions";
import { setDescriptionData, setContent } from "./../../../redux/place/actions";

const PlacesContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPlaces(props.placesData));
  }, []);

  return (
    <PlacesUnderSearchBar
      setActiveBar={props.setActiveBar}
      allPlaces={props.allPlaces}
      setDescriptionData={props.setDescriptionData}
      dataLoading={props.dataLoading}
      content={props.content}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    allPlaces: state.places.allPlaces,
    dataLoading: state.place.loading,
    content: state.place.content,
    placesData: state.places.placesData
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
