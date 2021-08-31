import PlaceDescriptionBar from "./PlaceDescriptionBar";
import { setDescriptionData } from "./../../../redux/place/actions";
import { setActiveBar } from "./../../../redux/active/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadData } from "../../../redux/place/actions";
import { loadImages } from "../../../redux/images/actions";
import { loadComments } from "../../../redux/comments/actions";

import {
  setAddComment,
  setOpenEdit,
  setOpenUploadPhoto,
  setOpenCompletePhoto,
} from "./../../../redux/active/actions";

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
          setAddComment={props.setAddComment}
          setOpenEdit={props.setOpenEdit}
          setOpenUploadPhoto={props.setOpenUploadPhoto}
          openCompletePhoto={props.openCompletePhoto}
          setOpenCompletePhoto={props.setOpenCompletePhoto}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    images: state.images.images,
    places: state.places.places,
    descriptionData: state.place.descriptionData,
    comments: state.comments.comments,
    openCompletePhoto: state.active.openCompletePhoto,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
  setAddComment,
  setOpenEdit,
  setOpenUploadPhoto,
  setOpenCompletePhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDescriptionContainer);
