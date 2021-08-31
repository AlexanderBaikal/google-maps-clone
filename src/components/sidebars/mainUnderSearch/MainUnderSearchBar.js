import {
  Avatar,
  ButtonBase,
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
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { green, grey } from "@material-ui/core/colors";
import clsx from "clsx";
import Extras from "../../inlines/Extras";
import History from "../../inlines/History";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LocalPharmacyOutlinedIcon from "@material-ui/icons/LocalPharmacyOutlined";
import LocalPostOfficeOutlinedIcon from "@material-ui/icons/LocalPostOfficeOutlined";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
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

  fab: {
    position: "fixed",
    left: "150px",
    bottom: "20px",
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

  iconAvatarLarge: {
    padding: "3px",
    fill: "white",
  },
  options: {
    display: "block",
    alignItems: "center",
    position: "relative",
    padding: "16px 27px",
  },

  optionsButton: {
    borderRadius: "8px",
    width: "155px",
    padding: "5px 10px",
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "rgb(239, 239, 239)",
    },
  },
}));

const MainUnderSearchBar = ({
  underSearchBar,
  setUnderSearchBar,
  setActiveBar,
}) => {
  const classes = useStyles();
  const handleUnderSearchBar = () => {
    setUnderSearchBar(!underSearchBar);
  };

  const myPlaces = [
    { name: "Home", iconComponent: HomeOutlinedIcon },
    { name: "Work", iconComponent: WorkOutlinedIcon },
  ];

  const extrasExtended = [
    { name: "Banks", iconComponent: AccountBalanceIcon },
    { name: "Gas stations", iconComponent: LocalGasStationIcon },
    { name: "Car parks", iconComponent: LocalParkingIcon },
    { name: "Pharamacies", iconComponent: LocalPharmacyOutlinedIcon },
    { name: "Post stations", iconComponent: LocalPostOfficeOutlinedIcon },
    { name: "Hospitals", iconComponent: LocalHospitalOutlinedIcon },
  ];

  const [shownMore, setShownMore] = useState(false);

  return (
    <>
      <Paper
        square
        variant="outlined"
        className={clsx(classes.card, classes.outlined)}
        style={{ height: "158px" }}
      >
        <div style={{ marginTop: "6px", marginLeft: "7px" }}>
          <div style={{ height: "50px" }} />
          <History />
        </div>
      </Paper>
      <Paper
        square
        variant="outlined"
        className={clsx(classes.card, classes.outlined)}
      >
        <List>
          {myPlaces.map((item, index) => (
            <div key={index}>
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
            </div>
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
        style={{ margin: shownMore ? 0 : "inherit" }}
      >
        <Extras
          shownMore={shownMore}
          setShownMore={setShownMore}
          setActiveBar={setActiveBar}
        />
      </Paper>
      {shownMore ? (
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
          style={{ borderTop: "none" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={classes.options}>
              {extrasExtended.map((item) => (
                <ButtonBase
                  aria-label="show extras"
                  className={classes.optionsButton}
                  key={item.name}
                >
                  <Avatar
                    className={classes.iconAvatarLarge}
                    style={{
                      backgroundColor: "#78909c",
                      marginBottom: "10px",
                    }}
                  >
                    <item.iconComponent />
                  </Avatar>
                  <ListItemText
                    secondaryTypographyProps={{
                      style: { textAlign: "left", marginLeft: "10px" },
                    }}
                    classes={{ secondary: classes.textSmall }}
                    secondary={item.name}
                  />
                </ButtonBase>
              ))}
            </div>
          </div>
        </Paper>
      ) : null}
      <Fab
        size="small"
        variant="extended"
        className={classes.fab}
        onClick={() => {
          handleUnderSearchBar();
          setShownMore(false);
        }}
      >
        <ExpandLessIcon className={classes.extendedIcon} />
        <div style={{ marginRight: "8px", color: "#3C4043" }}>Hide all</div>
      </Fab>
    </>
  );
};

export default MainUnderSearchBar;
