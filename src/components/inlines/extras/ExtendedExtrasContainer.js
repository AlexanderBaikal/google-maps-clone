import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setActiveBar, setUnderSearchBar } from "../../../redux/active/actions";
import { setPlacesData } from "../../../redux/places/actions";
import ExtendedExtras from "./ExtendedExtras";

const ExtendedExtrasContainer = (props) => {
  const dispatch = useDispatch();

  return (
    <ExtendedExtras
      setActiveBar={props.setActiveBar}
      setPlacesData={props.setPlacesData}
      loading={props.loading}
      placesData={props.placesData}
      allPlaces={props.allPlaces}
      setUnderSearchBar={props.setUnderSearchBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.places.loading,
    placesData: state.places.placesData,
    allPlaces: state.places.allPlaces,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setPlacesData,
  setUnderSearchBar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtendedExtrasContainer);
