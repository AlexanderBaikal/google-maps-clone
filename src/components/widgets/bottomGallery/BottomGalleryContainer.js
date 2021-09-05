import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { loadAllImages } from "../../../redux/images/actions";
import BottomGallery from "./BottomGallery";
import { setImagesType, setCurrentImg } from "../../../redux/images/actions";
import { setPhotoGallery } from "../../../redux/active/actions";
import { Slide } from "@material-ui/core";

const BottomGalleryContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllImages());
  }, []);

  return (
    <Slide direction="up" in={props.bottomGallery} mountOnEnter unmountOnExit>
      <BottomGallery
        images={props.images}
        setImagesType={props.setImagesType}
        setPhotoGallery={props.setPhotoGallery}
        setCurrentImg={props.setCurrentImg}
      />
    </Slide>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images.allImages,
    bottomGallery: state.active.bottomGallery,
  };
};

const mapDispatchToProps = { setImagesType, setPhotoGallery, setCurrentImg };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomGalleryContainer);
