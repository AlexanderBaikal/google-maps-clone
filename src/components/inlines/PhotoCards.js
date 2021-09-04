import { Fab } from "@material-ui/core";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import clsx from "clsx";
import { useState } from "react";
import { TYPE_PLACE } from "../../redux/images/actions";

const useStyles = makeStyles((theme) => ({
  root: {},
  photoCards: {
    marginBottom: "15px",
    position: "relative",
  },
  imageList: {
    flexWrap: "nowrap",
    padding: "0 20px",
    overflowX: "hidden",
    transition: "0.4s margin-left ease 0s",
  },
  icon: {
    fill: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    height: "50px",
  },
  title: {
    fontSize: "0.9rem",
    fontWeight: 600,
  },
  imageListItem: {
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 1px 6px rgb(60 64 67 / 30%)",
  },
  fabForward: {
    right: "10px",
  },
  fabBackward: {
    left: "10px",
  },
  fab: {
    backgroundColor: "white",
    position: "absolute",
    top: "calc(50% - 20px)",
    pointerEvents: "auto",
  },
  fabContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    opacity: 1,
    pointerEvents: "none",
  },
  shiftEnd: {
    marginLeft: "-220px!important",
  },
}));

const PhotoCards = ({ images, setPhotoGallery, setImagesType }) => {
  const classes = useStyles();

  const [shiftedEnd, setShiftedEnd] = useState(false);

  const shiftEnd = () => {
    setShiftedEnd(true);
  };

  const shiftStart = () => {
    setShiftedEnd(false);
  };

  const onPhotoClick = () => {
    setImagesType(TYPE_PLACE)
    setPhotoGallery(true);
  };

  const itemData = () => {
    var titles = ["All", "Latest", "Inside", "Street View", "Videos"];
    return titles.map((title, i) => {
      return {
        img: images
          ? images[i] ||
            images[0] ||
            "https://maps.gstatic.com/tactile/pane/result-no-thumbnail-2x.png"
          : "https://maps.gstatic.com/tactile/pane/result-no-thumbnail-2x.png",
        title,
      };
    });
  };

  return (
    <div className={classes.photoCards}>
      <ImageList
        className={
          shiftedEnd
            ? clsx(classes.imageList, classes.shiftEnd)
            : classes.imageList
        }
        style={{ margin: 0 }}
        rowHeight={150}
        gap={8}
      >
        {itemData().map((item, i) => (
          <ImageListItem
            key={i}
            classes={{ item: classes.imageListItem }}
            style={{ width: "120px" }}
            onClick={onPhotoClick}
          >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionPosition="left"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className={classes.fabContainer}>
        {!shiftedEnd ? (
          <Fab
            size="small"
            aria-label="add"
            className={clsx(classes.fab, classes.fabForward)}
            onClick={shiftEnd}
          >
            <ArrowForwardIosOutlinedIcon
              fontSize="small"
              style={{ fill: "black" }}
            />
          </Fab>
        ) : (
          <Fab
            size="small"
            aria-label="add"
            className={clsx(classes.fab, classes.fabBackward)}
            onClick={shiftStart}
          >
            <ArrowBackIosOutlinedIcon
              fontSize="small"
              style={{ fill: "black" }}
            />
          </Fab>
        )}
      </div>
    </div>
  );
};

export default PhotoCards;
