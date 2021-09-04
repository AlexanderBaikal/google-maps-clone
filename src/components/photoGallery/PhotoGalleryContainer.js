import { connect } from "react-redux";
import PhotoGallery from "./PhotoGallery";
import { setPhotoGallery } from "./../../redux/active/actions";
import { setOpenUploadPhoto } from "../../redux/active/actions";
import { TYPE_ALL } from "../../redux/images/actions";
import { useEffect, useState } from "react";

const PhotoGalleryContainer = (props) => {
  const [images, setImages] = useState(props.allImages);
  const [title, setTitle] = useState(props.title);

  useEffect(() => {
    setImages(props.imagesType === TYPE_ALL ? props.allImages : props.images);
    setTitle(props.imagesType === TYPE_ALL ? "All" : props.title);
  }, [props.imagesType]);

  return ((props.content && props.images) || props.allImages) &&
    props.photoGallery ? (
    <PhotoGallery
      title={title}
      images={images}
      setOpenUploadPhoto={props.setOpenUploadPhoto}
      photoGallery={props.photoGallery}
      setPhotoGallery={props.setPhotoGallery}
    />
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    title: state.place.content?.name,
    images: state.images.images,
    allImages: state.images.allImages,
    photoGallery: state.active.photoGallery,
    imagesType: state.images.imagesType,
  };
};

const mapDispatchToProps = {
  setPhotoGallery,
  setOpenUploadPhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGalleryContainer);
