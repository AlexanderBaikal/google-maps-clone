import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    menuSidebar: {
      height: "100vh",
      width: "320px",
      zIndex: 502,
      position: "fixed",
      paddingLeft: "8px",
      inset: 0,
    },
    open: {
      transition: "transform 0.2s ease-in",
      transform: "translateX(0)",
    },
    close: {
      transition: "transform 0.2s ease-in",
      transform: "translateX(-100%)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 11px",
    },
    headerImage: {
      display: "block",
      height: "24px",
      paddingLeft: "11px",
    },
    listItemText: {
      fontSize: "0.8rem",
    },
  };
});

const MenuSidebar = ({ menuSidebar, handleMenuSidebar }) => {
  const layersText = "Another layers";
  const classes = useStyles();
  const componentsToText = [
    { iconComponent: LocationOnOutlinedIcon, text: "My places" },
    { iconComponent: RateReviewOutlinedIcon, text: "Sharing Geodata" },
    { iconComponent: TimelineOutlinedIcon, text: "History" },
    { iconComponent: PermIdentityOutlinedIcon, text: "My data on Maps" },
  ];

  return (
    <Paper
      elevation={10}
      className={
        menuSidebar
          ? clsx(classes.menuSidebar, classes.open)
          : clsx(classes.menuSidebar, classes.close)
      }
      square
    >
      <div className={classes.header}>
        <img
          className={classes.headerImage}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
          alt="logo"
        />
        <IconButton onClick={handleMenuSidebar}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key={layersText}>
          <ListItemIcon>
            <LayersOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary={layersText}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        {componentsToText.map((data) => (
          <ListItem button key={data.text}>
            <ListItemIcon>
              <data.iconComponent />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={data.text}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Paper>
  );
};

export default MenuSidebar;
