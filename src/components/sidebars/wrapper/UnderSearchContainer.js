import UnderSearchBar from "./UnderSearchBar";
import { connect, useDispatch } from "react-redux";
import { loadAllPlaces } from "../../../redux/places/actions";
import { useEffect } from "react";

const UnderSearchContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.placesData) dispatch(loadAllPlaces(props.placesData));
  }, [props.placesData]);

  return (
    <UnderSearchBar
      underSearchBar={props.underSearchBar}
      activeBar={props.activeBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.active.underSearchBar,
    activeBar: state.active.activeBar,
    placesData: state.places.placesData,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnderSearchContainer);
