import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
  Paper,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { useHorizontalScroll } from "../../inlines/HorizontalScroll";

const useStyles = makeStyles((theme) => {
  return {
    bottomGallery: {
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
    },

    iconButton: {
      padding: "6px",
    },
  };
});

const BottomGallery = () => {
  const classes = useStyles();
  const scrollRef = useHorizontalScroll();

  const itemData = [
    {
      img: "https://material-ui.com/static/images/image-list/breakfast.jpg",
      title: "Summer breakfast",
      author: "author",
    },
    {
      img: "https://material-ui.com/static/images/image-list/burgers.jpg",
      title: "Hamburger",
      author: "author",
    },
    {
      img: "https://material-ui.com/static/images/image-list/camera.jpg",
      title: "Something",
      author: "author",
    },
    {
      img: "https://material-ui.com/static/images/image-list/morning.jpg",
      title: "Morning coffee",
      author: "author",
    },
    {
      img: "http://material-ui.com/static/images/image-list/breakfast.jpg",
      title: "Image",
      author: "author",
    },
    {
      img: "http://material-ui.com/static/images/image-list/burgers.jpg",
      title: "Unnamed",
      author: "author",
    },
    {
      img: "http://material-ui.com/static/images/image-list/camera.jpg",
      title: "",
      author: "author",
    },
    {
      img: "http://material-ui.com/static/images/image-list/morning.jpg",
      title: "Image",
      author: "author",
    },
  ];

  return (
    <Paper className={classes.bottomGallery} square>
      <div style={{ width: "10%" }} />
      <div className={classes.root}>
        <ImageList
          className={classes.imageList}
          rowHeight={110}
          style={{ margin: 0 }}
          gap={12}
          ref={scrollRef}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              classes={{ item: classes.imageListItem }}
              style={{ width: "220px" }}
            >
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
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
          ))}
          <div style={{ width: 0, height: 0 }} />
        </ImageList>
      </div>
    </Paper>
  );
};

export default BottomGallery;
