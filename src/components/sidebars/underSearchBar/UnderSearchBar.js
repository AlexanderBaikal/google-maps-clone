import {
  Avatar,
  Button,
  ButtonBase,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";
import HotelIcon from "@material-ui/icons/Hotel";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { green, grey } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  underSearch: {
    position: "relative",
    backgroundColor: "#f0f0f0",
    height: "100vh",
    width: "423px",
  },

  visible: {
    display: "block",
  },

  close: {
    display: "none",
  },

  card: {
    width: "100%",
    marginBottom: "10px",
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
    fill: "#2196f3",
  },

  outlined: {
    borderLeft: "none",
    borderRight: "none",
  },

  iconAvatar: {
    width: "35px",
    height: "35px",
    backgroundColor: grey[200],
    color: "black",
  },

  iconAvatarSmall: {
    width: "25px",
    height: "25px",
    marginLeft: "5px",
    backgroundColor: green[500],
    color: "black",
  },

  iconAvatarLarge: {
    padding: "3px",
    fill: "white",
  },

  extras: {
    padding: "8px 16px",
  },

  extrasHeader: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "20px",
  },

  fab: {
    position: "fixed",
    left: "150px",
    bottom: "15px",
    backgroundColor: "white",
    textTransform: "none",
    border: "1px solid #dadce0",
    boxShadow: "0 1px 6px rgb(60 64 67 / 28%)",

    "&:hover": {
      borderColor: " #DADCE0",
      backgroundColor: "#F1F3F4",
      transition: "none",
    },
  },

  weather: {
    display: "flex",
  },

  weatherImage: {
    backgroundSize: "24px 24px",
    height: "24px",
    margin: "7.5px 0 8px 10px",
    width: "24px",
  },

  weatherLabel: {
    fontSize: "13px",
    color: "rgba(0, 0, 0, 0.54)",
    padding: "10px 0",
  },

  options: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    position: "relative",
    left: "-7px",
    paddingTop: "10px",
  },

  optionsButton: {
    borderRadius: "8px",
    width: "74px",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgb(239, 239, 239)",
    },
  },

  divider: {
    margin: "0 24px",
    borderBottom: "1px solid #e8eaed",
  },

  textSmall: {
    fontSize: "0.75rem",
  },
  marginZero: {
    margin: 0,
  },
}));

const UnderSearchBar = ({ underSearchBar, setUnderSearchBar }) => {
  const classes = useStyles();
  const handleUnderSearchBar = () => {
    setUnderSearchBar((value) => !value);
  };

  const myPlaces = [
    { name: "Home", iconComponent: HomeOutlinedIcon },
    { name: "Work", iconComponent: WorkOutlinedIcon },
  ];

  const extras = [
    {
      name: "Grocery stores",
      iconComponent: ShoppingCartOutlinedIcon,
      color: "#388e3c",
    },
    {
      name: "Restaurants",
      iconComponent: RestaurantOutlinedIcon,
      color: "#42a5f5",
    },
    {
      name: "Takeaway food",
      iconComponent: LocalCafeOutlinedIcon,
      color: "#d32f2f",
    },
    { name: "Hostels", iconComponent: HotelIcon, color: "#f57c00" },
    { name: "Show more", iconComponent: MoreHorizIcon, color: "#78909c" },
  ];

  return (
    <Paper
      className={
        underSearchBar
          ? clsx(classes.underSearch, classes.open)
          : clsx(classes.underSearch, classes.close)
      }
      elevation={underSearchBar ? 12 : 4}
      square={underSearchBar ? true : false}
    >
      <>
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
          style={{ height: "158px" }}
        ></Paper>
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
        >
          <List>
            {myPlaces.map((item, index) => (
              <>
                <ListItem button key={item.name}>
                  <ListItemIcon>
                    <Avatar className={classes.iconAvatar}>
                      <item.iconComponent fontSize="medium" />
                    </Avatar>
                  </ListItemIcon>
                  <div>
                    <ListItemText primary={item.name} style={{ margin: 0 }} />
                    <ListItemText
                      secondary={"Add address"}
                      style={{ margin: 0 }}
                    />
                  </div>
                </ListItem>
                {index < myPlaces.length - 1 ? (
                  <div className={classes.divider}></div>
                ) : null}
              </>
            ))}
          </List>
        </Paper>
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
        >
          <List>
            <ListItem button key={"Traffic"}>
              <ListItemIcon>
                <Avatar
                  className={classes.iconAvatarSmall}
                  style={{ backgroundColor: "#4caf50" }}
                >
                  <DriveEtaIcon
                    fontSize="small"
                    style={{ backgroundColor: "#4caf50", fill: "white" }}
                  />
                </Avatar>
              </ListItemIcon>
              <div>
                <ListItemText
                  primary={"There aren't any traffic jams"}
                  classes={{ root: classes.marginZero }}
                />
                <ListItemText
                  secondary={"Common traffic"}
                  classes={{
                    secondary: classes.textSmall,
                    root: classes.marginZero,
                  }}
                />
              </div>
              <IconButton style={{ position: "absolute", right: "10px" }}>
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </IconButton>
            </ListItem>
          </List>
        </Paper>
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
        >
          <div button key={"Options"} className={classes.extras}>
            <div className={classes.extrasHeader}>
              <div>
                <h1 style={{ fontSize: "15px" }}>London</h1>
              </div>
              <div className={classes.weather}>
                <div className={classes.weatherLabel}>15°</div>
                <img
                  className={classes.weatherImage}
                  src="https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png"
                  alt="Partly cloudy"
                />
              </div>
            </div>
            <div className={classes.options}>
              {extras.map((item) => (
                <ButtonBase
                  aria-label="show extras"
                  className={classes.optionsButton}
                >
                  <Avatar
                    className={classes.iconAvatarLarge}
                    style={{ backgroundColor: item.color, marginBottom: "10px" }}
                  >
                    <item.iconComponent />
                  </Avatar>
                  <ListItemText
                    classes={{ secondary: classes.textSmall }}
                    secondary={item.name}
                  />
                </ButtonBase>
              ))}
            </div>
          </div>
        </Paper>
        <Fab
          size="small"
          variant="extended"
          className={classes.fab}
          onClick={handleUnderSearchBar}
        >
          <ExpandLessIcon className={classes.extendedIcon} />
          <div style={{ marginRight: "8px", color: "#3C4043" }}>Hide all</div>
        </Fab>
      </>
    </Paper>
  );
};

export default UnderSearchBar;
