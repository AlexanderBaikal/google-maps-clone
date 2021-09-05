import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
  Paper,
  Slide,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { useHorizontalScroll } from "../../inlines/HorizontalScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { createRef, forwardRef, useEffect, useState } from "react";
import { TYPE_ALL } from "../../../redux/images/actions";

const useStyles = makeStyles((theme) => {
  return {
    bottomGallery: {
      pointerEvents: "auto",
      position: "relative",
      right: "0px",
      bottom: "0px",
      width: "100%",
      padding: "8px 0",
      display: "flex",
      justifyContent: "flex-end",
    },
    root: {
      width: "calc(100% - 150px)",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: "nowrap",
    },
    icon: {
      fill: "white",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      height: "30px",
    },
    title: {
      fontSize: "0.7rem",
    },
    imageListItem: {
      borderRadius: "8px",
      cursor: "pointer",
    },

    iconButton: {
      padding: "6px",
    },
    lazyLoadWrapper: {
      width: "100%",
      height: "100%",
    },
    lazyLoad: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
});

const BottomGallery = forwardRef(
  ({ images = [], setImagesType, setPhotoGallery, bottomGallery }, ref) => {
    const classes = useStyles();
    const scrollRef = useHorizontalScroll();

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

    let loading = useSelector((state) => state.images.loading);

    const onImageClick = () => {
      setImagesType(TYPE_ALL);
      setPhotoGallery(true);
    };

    return (
      <Paper className={classes.bottomGallery} square ref={ref}>
        <div style={{ width: "10%" }} />
        <div className={classes.root}>
          <ImageList
            className={classes.imageList}
            rowHeight={110}
            style={{ margin: 0 }}
            gap={12}
            ref={scrollRef}
          >
            {!loading
              ? images.map((item, i) => (
                  <ImageListItem
                    key={item}
                    ref={imgListRefs[i]}
                    classes={{ item: classes.imageListItem }}
                    style={{ width: "220px" }}
                    onClick={onImageClick}
                  >
                    <LazyLoadImage
                      src={item}
                      effect="blur"
                      className={classes.lazyLoad}
                      wrapperClassName={classes.lazyLoadWrapper}
                      onError={() => onImageError(i)}
                    />
                    <ImageListItemBar
                      title={""}
                      actionPosition="left"
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <IconButton
                          classes={{ root: classes.iconButton }}
                          aria-label={`icon ${item.title}`}
                        >
                          <PhotoCameraIcon
                            className={classes.icon}
                            fontSize="small"
                          />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))
              : [...Array(10)].map((item, i) => (
                  <ImageListItem
                    key={i}
                    classes={{ item: classes.imageListItem }}
                    style={{ width: "220px" }}
                  >
                    <Skeleton variant="rect" height={118} />
                  </ImageListItem>
                ))}

            <div style={{ width: 0, height: 0 }} />
          </ImageList>
        </div>
      </Paper>
    );
  }
);

export default BottomGallery;
