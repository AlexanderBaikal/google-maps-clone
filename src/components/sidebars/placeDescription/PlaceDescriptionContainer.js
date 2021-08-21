import PlaceDescriptionBar from "./PlaceDescriptionBar";
import { setActiveBar } from "./../../../redux/sidebars/actions";
import { connect, useDispatch } from "react-redux";
import {
  loadData,
  loadImages,
} from "../../../redux/sidebars/placeDescription/actions";
import { useEffect } from "react";

const PlaceDescriptionContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(props.descriptionData));
    dispatch(loadImages());
  }, []);

  return (
    <>
      {props.content && (
        <PlaceDescriptionBar
          setActiveBar={props.setActiveBar}
          content={props.content}
          images={props.images}
          places={props.places}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.sidebars.descriptionBar.content,
    images: state.sidebars.descriptionBar.images,
    places: state.sidebars.descriptionBar.places,
    descriptionData: state.sidebars.descriptionBar.descriptionData,
  };
};

const mapDispatchToProps = {
  setActiveBar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDescriptionContainer);
