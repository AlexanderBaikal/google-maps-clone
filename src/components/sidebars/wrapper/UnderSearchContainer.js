import UnderSearchBar from "./UnderSearchBar";
import { connect, useDispatch } from "react-redux";
import { loadAllPlaces } from "../../../redux/places/actions";
import { useEffect } from "react";
import { Slide } from "@material-ui/core";

const UnderSearchContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.placesData) dispatch(loadAllPlaces(props.placesData));
  }, [props.placesData]);

  return (
    <Slide direction="down" in={props.underSearchBar} mountOnEnter unmountOnExit >
      <UnderSearchBar
        underSearchBar={props.underSearchBar}
        activeBar={props.activeBar}
      />
    </Slide>
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
