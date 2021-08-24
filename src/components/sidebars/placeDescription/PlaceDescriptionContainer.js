import PlaceDescriptionBar from "./PlaceDescriptionBar";
import { setDescriptionData } from "./../../../redux/sidebars/placeDescription/actions";
import { setActiveBar } from "./../../../redux/sidebars/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadData } from "../../../redux/sidebars/placeDescription/data/actions";
import { loadImages } from "../../../redux/sidebars/placeDescription/images/actions";
import { loadComments } from "../../../redux/sidebars/placeDescription/comments/actions";

const PlaceDescriptionContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(props.descriptionData));
    dispatch(loadComments(props.descriptionData));
    dispatch(loadImages(props.descriptionData));
  }, [props.descriptionData]);

  return (
    <>
      {props.content && (
        <PlaceDescriptionBar
          setActiveBar={props.setActiveBar}
          setDescriptionData={props.setDescriptionData}
          content={props.content}
          images={props.images}
          places={props.places}
          comments={props.comments}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.sidebars.descriptionBar.data.content,
    images: state.sidebars.descriptionBar.images.images,
    places: state.sidebars.descriptionBar.places.places,
    descriptionData: state.sidebars.descriptionBar.main.descriptionData,
    comments: state.sidebars.descriptionBar.comments.comments,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDescriptionContainer);
