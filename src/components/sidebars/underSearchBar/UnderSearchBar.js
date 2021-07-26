import {
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
import "./_underSearchBar.scss";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  fabRoot: {
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
      transitionDuration: "0ms",
    },
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
    fill: "#2196f3",
  },
}));

const UnderSearchBar = ({ underSearchBar, setUnderSearchBar }) => {
  const handleUnderSearchBar = () => {
    setUnderSearchBar((value) => !value);
    // setSearchPrompt((value) => !value);
  };
  const layersText = "Show traffic jams, expected time and places close to you";
  const classes = useStyles();

  return (
    <Paper
      className={underSearchBar ? "under-search open" : "under-search close"}
      elevation={underSearchBar ? 12 : 4}
    >
      {!underSearchBar ? (
        <div
          onClick={handleUnderSearchBar}
          className="under-search-compact"
        >
          <IconButton
            className="under-search__expand-button"
            aria-label="show extras"
          >
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
          <ListItemText
            classes={{ primary: "under-search-compact__text" }}
            primary={layersText}
          />
        </div>
      ) : (
        <>
          <Paper
            square
            variant="outlined"
            className="under-search__card"
            style={{ height: "152px" }}
          ></Paper>
          <Paper square variant="outlined" className="under-search__card">
            <List>
              <ListItem
                button
                key={"Home"}
                className="under-search__card__list-item"
              >
                <ListItemIcon style={{ minWidth: "32px" }}>
                  <HomeOutlinedIcon fontSize="medium" className="round-icon" />
                </ListItemIcon>
                <div className="under-search__card__list-item__description">
                  <ListItemText
                    primary={"Home"}
                    className="under-search__card__list-item__description__text"
                  />
                  <ListItemText
                    secondary={"Add address"}
                    className="under-search__card__list-item__description__text"
                  />
                </div>
              </ListItem>
              <div className="under-search__card__divider"></div>
              <ListItem
                button
                key={"Work"}
                className="under-search__card__list-item"
              >
                <ListItemIcon style={{ minWidth: "32px" }}>
                  <WorkOutlinedIcon fontSize="medium" className="round-icon" />
                </ListItemIcon>
                <div className="under-search__card__list-item__description">
                  <ListItemText
                    primary={"Work"}
                    className="under-search__card__list-item__description__text"
                  />
                  <ListItemText
                    secondary={"Add address"}
                    className="under-search__card__list-item__description__text"
                  />
                </div>
              </ListItem>
            </List>
          </Paper>
          <Paper square variant="outlined" className="under-search__card">
            <List>
              <ListItem
                button
                key={"Traffic"}
                className="under-search__card__list-item"
              >
                <ListItemIcon style={{ minWidth: "32px" }}>
                  <DriveEtaIcon
                    fontSize="small"
                    className="round-icon"
                    style={{ backgroundColor: "#4caf50", fill: "white" }}
                  />
                </ListItemIcon>
                <div className="under-search__card__list-item__description">
                  <ListItemText
                    primary={"There aren't any traffic jams"}
                    className="under-search__card__list-item__description__text"
                  />
                  <ListItemText
                    secondary={"Common traffic"}
                    className="under-search__card__list-item__description__text"
                  />
                </div>
                <IconButton style={{ position: "absolute", right: "10px" }}>
                  <ArrowForwardIosRoundedIcon fontSize="small" />
                </IconButton>
              </ListItem>
            </List>
          </Paper>
          <Paper square variant="outlined" className="under-search__card">
            <div
              button
              key={"Options"}
              className="under-search__card__list-item"
              style={{
                display: "block",
                padding: "8px 16px",
              }}
            >
              <div className="under-search__card__list-item__header">
                <div>
                  <h1 style={{ fontSize: "15px" }}>London</h1>
                </div>
                <div className="under-search__card__list-item__header__weather">
                  <div className="under-search__card__list-item__header__weather__degrees">
                    15°
                  </div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png"
                    alt="Partly cloudy"
                  />
                </div>
              </div>
              <div className="under-search__card__list-item__options">
                <ButtonBase aria-label="show extras" className="option-button">
                  <ShoppingCartOutlinedIcon className="round-icon-large" />
                  <ListItemText
                    classes={{ secondary: "under-search-text-small" }}
                    secondary={"Grocery stores"}
                  />
                </ButtonBase>
                <ButtonBase aria-label="show extras" className="option-button">
                  <RestaurantOutlinedIcon
                    className="round-icon-large"
                    style={{ backgroundColor: "#42a5f5" }}
                  />
                  <ListItemText
                    classes={{ secondary: "under-search-text-small" }}
                    secondary={"Restaurants"}
                  />
                </ButtonBase>
                <ButtonBase aria-label="show extras" className="option-button">
                  <LocalCafeOutlinedIcon
                    className="round-icon-large"
                    style={{ backgroundColor: "#d32f2f" }}
                  />
                  <ListItemText
                    classes={{ secondary: "under-search-text-small" }}
                    secondary={"Takeaway food"}
                  />
                </ButtonBase>
                <ButtonBase aria-label="show extras" className="option-button">
                  <HotelIcon
                    className="round-icon-large"
                    style={{ backgroundColor: "#f57c00" }}
                  />
                  <ListItemText
                    classes={{ secondary: "under-search-text-small" }}
                    secondary={"Hostels"}
                  />
                </ButtonBase>
                <ButtonBase aria-label="show extras" className="option-button">
                  <MoreHorizIcon
                    className="round-icon-large"
                    style={{ backgroundColor: "#78909c" }}
                  />
                  <ListItemText
                    classes={{ secondary: "under-search-text-small" }}
                    secondary={"Show more"}
                  />
                </ButtonBase>
              </div>
            </div>
          </Paper>
          <Fab
            size="small"
            variant="extended"
            className={classes.fabRoot}
            onClick={handleUnderSearchBar}
          >
            <ExpandLessIcon className={classes.extendedIcon} />
            <div style={{ marginRight: "8px", color: "#3C4043" }}>Hide all</div>
          </Fab>
        </>
      )}
    </Paper>
  );
};

export default UnderSearchBar;
