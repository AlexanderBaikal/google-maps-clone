import {
  DialogTitle,
  Divider,
  Fab,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
} from "@material-ui/core";

import clsx from "clsx";
import { createRef, useEffect, useState } from "react";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import "react-lazy-load-image-component/src/effects/blur.css";

import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { LazyLoadImage } from "react-lazy-load-image-component";
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 600,
    position: "absolute",
    display: "flex",
    height: "100vh",
    inset: 0,
  },
  sidebar: {
    width: "406px",
    backgroundColor: "white",
    overflow: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  photoBlock: {
    backgroundColor: "black",
    width: "calc(100% - 406px)",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  currentImage: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: (props) =>
      props.currentImage.width > props.currentImage.height
        ? "-webkit-fill-available"
        : "",
    height: (props) =>
      props.currentImage.width <= props.currentImage.height
        ? "-webkit-fill-available"
        : "",
  },
  gallery: {
    overflowY: "auto",
    overflowX: "hidden",
  },
  dialog: {
    maxWidth: "764px",
    height: "626px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  addPhotoButton: {
    position: "absolute",
    right: "8px",
    top: "4px",
    color: theme.palette.grey[500],
  },
  backButton: {
    position: "absolute",
    left: "8px",
    top: "4px",
    color: theme.palette.grey[700],
  },
  tab: {
    minWidth: "72px",
  },
  tabs: {
    //   display: "flex",
    //   justifyContent: "space-around"
  },
  sideImage: {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  lazyLoadWrapper: {
    width: "100%",
    height: "100%",
  },
}));

const PhotoGallery = ({
  title,
  images,
  setOpenUploadPhoto,
  setPhotoGallery,
  currentImg,
  setCurrentImg,
}) => {
  const img = new Image();
  img.src = images[currentImg];

  const classes = useStyles({ currentImage: img });

  const onClose = () => {
    setCurrentImg(0);
    setPhotoGallery(false);
  };

  const onPhotoUpload = () => {
    setOpenUploadPhoto(true);
  };

  const [imgListRefs, setImgListRefs] = useState([]);

  useEffect(() => {
    setImgListRefs((imgListRefs) =>
      Array(images.length)
        .fill()
        .map((_, i) => imgListRefs[i] || createRef())
    );
  }, [images.length]);

  const onImageError = (index) => {
    if (imgListRefs[index].current) imgListRefs[index].current.remove();
  };

  const [tabValue, setTabValue] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <DialogTitle className={classes.dialogTitle} onClose={onClose}>
          <div className={classes.title}>
            <Typography variant="h3" component="span">
              {title}
            </Typography>
          </div>

          <IconButton
            aria-label="close"
            className={classes.backButton}
            onClick={onClose}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            aria-label="close"
            className={classes.addPhotoButton}
            onClick={onPhotoUpload}
          >
            <AddAPhotoOutlinedIcon color="primary" />
          </IconButton>
        </DialogTitle>
        <Divider />
        <Tabs
          value={tabValue}
          onChange={(e, i) => {
            setTabValue(i);
          }}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
          TabIndicatorProps={{ style: { width: "72px" } }}
        >
          <Tab label="All" className={classes.tab} />
          <Tab label="Latest" className={classes.tab} />
          <Tab label="Inside" className={classes.tab} />
          <Tab label="360" className={classes.tab} />
          <Tab label="Streetview" className={classes.tab} />
        </Tabs>
        <div className={classes.gallery}>
          <ImageList
            rowHeight={200}
            gap={2}
            cols={1}
            style={{ flexWrap: "no-wrap" }}
          >
            {images.map((item, i) => (
              <ImageListItem
                key={item}
                ref={imgListRefs[i]}
                style={{ height: "310px" }}
                cols={1}
              >
                <LazyLoadImage
                  src={item}
                  effect="blur"
                  className={classes.sideImage}
                  wrapperClassName={classes.lazyLoadWrapper}
                  onError={() => onImageError(i)}
                  onClick={() => setCurrentImg(i)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
      <div className={classes.photoBlock}>
        <img
          src={images[currentImg]}
          alt=""
          onError={() => onImageError(currentImg)}
          className={classes.currentImage}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
