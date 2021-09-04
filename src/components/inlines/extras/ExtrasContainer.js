import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setActiveBar,
  setSearchPrompt,
  setUnderSearchBar,
} from "../../../redux/active/actions";
import Extras from "./Extras";
import { loadAllPlaces, setPlacesData } from "../../../redux/places/actions";
import { setShownMore } from "./../../../redux/active/actions";

const ExtrasContainer = (props) => {
  const dispatch = useDispatch();

  return (
    <Extras
      setActiveBar={props.setActiveBar}
      setUnderSearchBar={props.setUnderSearchBar}
      setPlacesData={props.setPlacesData}
      setSearchPrompt={props.setSearchPrompt}
      countItems={props.countItems} //!
      shownMore={props.shownMore}
      setShownMore={props.setShownMore}
      loading={props.loading}
      allPlaces={props.allPlaces}
      placesData={props.placesData}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    shownMore: state.active.shownMore,
    loading: state.places.loading,
    allPlaces: state.places.allPlaces,
    placesData: state.places.placesData,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setUnderSearchBar,
  setPlacesData,
  setSearchPrompt,
  setShownMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtrasContainer);
