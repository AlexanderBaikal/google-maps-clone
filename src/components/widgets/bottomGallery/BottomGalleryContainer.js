import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { loadAllImages } from "../../../redux/images/actions";
import BottomGallery from "./BottomGallery";

const BottomGalleryContainer = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAllImages());
  }, []);

  return <BottomGallery images={props.images} />;
};

const mapStateToProps = (state) => {
  return {
    images: state.images.allImages,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomGalleryContainer);
