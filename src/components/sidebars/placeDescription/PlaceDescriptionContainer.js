import PlaceDescriptionBar from "./PlaceDescriptionBar";
import { setDescriptionData } from "./../../../redux/place/actions";
import { setActiveBar, setPhotoGallery } from "./../../../redux/active/actions";
import { connect, useDispatch } from "react-redux";
import { loadComments } from "../../../redux/comments/actions";
import { login } from "../../../redux/auth/actions";
import { setImagesType } from "../../../redux/images/actions";

import {
  setAddComment,
  setOpenEdit,
  setOpenUploadPhoto,
  setOpenCompletePhoto,
} from "./../../../redux/active/actions";

const PlaceDescriptionContainer = (props) => {
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
          loadComments={props.loadComments}
          profile={props.profile}
          login={props.login}
          anyLoading={props.anyLoading}
          setPhotoGallery={props.setPhotoGallery}
          setImagesType={props.setImagesType}
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
    comments: state.comments.all,
    openCompletePhoto: state.active.openCompletePhoto,
    profile: state.auth.profile,
    anyLoading: state.places.loading || state.place.loading,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setDescriptionData,
  setAddComment,
  setOpenEdit,
  setOpenUploadPhoto,
  setOpenCompletePhoto,
  loadComments,
  login,
  setPhotoGallery,
  setImagesType,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDescriptionContainer);
