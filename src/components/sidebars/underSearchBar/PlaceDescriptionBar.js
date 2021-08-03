//

import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  Fab,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MobileScreenShareOutlinedIcon from "@material-ui/icons/MobileScreenShareOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import PublicIcon from "@material-ui/icons/Public";
import CallIcon from "@material-ui/icons/Call";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useState } from "react";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},
  topImage: { overflow: "hidden", width: "100%" },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  basicInfo: {
    padding: "15px 25px",
  },
  actionButtons: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px 30px 0 26px",
    alignItems: "flex-start",
  },
  optionsButton: {
    borderRadius: "8px",
    width: "74px",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",
    justifyContent: "center",
  },
  textSmall: {
    fontSize: "0.75rem",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    padding: "7px",
  },
  avatarFilled: {
    backgroundColor: theme.palette.primary.main,
    fill: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  avatarOutlined: {
    backgroundColor: "transparent",
    fill: theme.palette.primary.main,
  },

  marginZero: {
    margin: 0,
  },
  listItemIcon: {
    minWidth: "48px",
  },
  listItemGutters: {
    paddingRight: "24px",
    paddingLeft: "24px",
  },
  actionDiv: {
    display: "flex",
    justifyContent: "center",
  },
  listInfo: {
    padding: "6px 0",
  },
  buttonRounded: {
    borderRadius: "100px",
  },
  bottomButton: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
  },
  photos: {
    // padding: "12px",
  },
  subheader: {
    padding: "16px 24px",
  },
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
    fontSize: "0.7rem",
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
  },
  fabContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  shiftEnd: {
    marginLeft: "-220px!important", // coz there is a bug with styles
  },
}));

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
];

const PlaceDescriptionBar = () => {
  const classes = useStyles();

  const actionButtons = [
    { name: "Directions", iconComponent: DirectionsIcon, filled: true },
    { name: "Save", iconComponent: BookmarkBorderOutlinedIcon, filled: false },
    { name: "Nearby", iconComponent: LocationOnOutlinedIcon, filled: false },
    {
      name: "Send to your phone",
      iconComponent: MobileScreenShareOutlinedIcon,
      filled: false,
    },
    { name: "Share", iconComponent: ShareOutlinedIcon, filled: false },
  ];

  const listInfo = [
    { text: "You visited on Thursday", iconComponent: TimelineOutlinedIcon },
    {
      text: "Ulitsa 3 Iyulya, 25, г.Иркутск, Irkutsk Oblast, 664022",
      iconComponent: LocationOnOutlinedIcon,
    },
    { text: "Opens at 10:00", iconComponent: QueryBuilderOutlinedIcon },
    { text: "mk.com", iconComponent: PublicIcon },
    { text: "+73952485325", iconComponent: CallIcon },
    { text: "Claim this business", iconComponent: VerifiedUserOutlinedIcon },
    { text: "Add a label", iconComponent: LabelOutlinedIcon },
  ];

  const [shiftedEnd, setShiftedEnd] = useState(false);

  const shiftEnd = () => {
    setShiftedEnd(true);
  };

  const shiftStart = () => {
    setShiftedEnd(false);
  };

  return (
    <div>
      <img
        src="https://lh5.googleusercontent.com/p/AF1QipOGhfXAIoIdT-qFA6SD4HTRLPEvQ-xiCnR3Dh_6=w426-h240-k-no"
        alt=""
        className={classes.topImage}
      />
      <div className={classes.basicInfo}>
        <Typography variant="h1">Trendy Quarter</Typography>
        <Typography variant="h2" style={{ marginTop: "4px" }}>
          Trendy Quarter
        </Typography>
        <Typography
          variant="body2"
          component="div"
          style={{ marginTop: "8px" }}
        >
          <div className={classes.rating}>
            <Box mr="3px">{4.2}</Box>
            <Rating name="read-only" value={4.2} readOnly size="small" />
            <Box ml="3px">{"1,432 reviews"}</Box>
          </div>
          <Link
            href="#"
            onClick={(e) => e.preventDefault()}
            variant="body2"
            color="textSecondary"
          >
            {"Shopping mall"}
          </Link>
        </Typography>
      </div>
      <Divider />
      <div className={classes.actionButtons}>
        {actionButtons.map((item) => (
          <div className={classes.optionsButton} key={item.name}>
            <div className={classes.actionDiv}>
              <IconButton
                classes={{
                  root: item.filled
                    ? clsx(classes.avatar, classes.avatarFilled)
                    : clsx(classes.avatar, classes.avatarOutlined),
                }}
              >
                <item.iconComponent
                  fontSize="small"
                  style={{ fill: "inherit" }}
                />
              </IconButton>
            </div>

            <ListItemText
              secondaryTypographyProps={{
                color: "primary",
                style: { textAlign: "center" },
              }}
              classes={{ secondary: classes.textSmall }}
              secondary={item.name}
            />
          </div>
        ))}
      </div>
      <Divider />
      <div className={classes.listInfo}>
        <List>
          {listInfo.map((item) => (
            <ListItem button classes={{ gutters: classes.listItemGutters }}>
              <ListItemIcon classes={{ root: classes.listItemIcon }}>
                <item.iconComponent color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ variant: "body2" }}
                classes={{ root: classes.marginZero }}
              />
            </ListItem>
          ))}
        </List>
        <div className={classes.bottomButton}>
          <Button
            variant="outlined"
            className={classes.buttonRounded}
            startIcon={<CreateOutlinedIcon color="primary" />}
          >
            Suggest an edit
          </Button>
        </div>
      </div>
      <Divider />
      <div className={classes.photos}>
        <div className={classes.subheader}>
          <Typography variant="subtitle1">Photos</Typography>
        </div>
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
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                classes={{ item: classes.imageListItem }}
                style={{ width: "120px" }}
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
        <div className={classes.bottomButton}>
          <Button
            variant="outlined"
            className={classes.buttonRounded}
            startIcon={<CameraAltOutlinedIcon color="primary" />}
          >
            Add a photo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDescriptionBar;
