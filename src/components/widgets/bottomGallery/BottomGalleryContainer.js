import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { loadAllImages } from "../../../redux/images/actions";
import BottomGallery from "./BottomGallery";
import { setImagesType } from "../../../redux/images/actions";
import { setPhotoGallery } from "../../../redux/active/actions";


const BottomGalleryContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllImages());
  }, []);

  return (
    <BottomGallery images={props.images} setImagesType={props.setImagesType} setPhotoGallery={props.setPhotoGallery} />
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images.allImages,
  };
};

const mapDispatchToProps = { setImagesType,setPhotoGallery };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomGalleryContainer);
