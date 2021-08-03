import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import MainUnderSearchBar from "./MainUnderSearchBar";
import PlaceDescriptionBar from "./PlaceDescriptionBar";
import PlacesUnderSearchBar from "./PlacesUnderSearchBar";

const useStyles = makeStyles((theme) => ({
  underSearch: {
    position: "relative",

    height: "100vh",
    width: "423px",
    overflow: "auto",
  },

  visible: {
    display: "block",
  },

  close: {
    display: "none",
  },
}));

const UnderSearchBar = ({
  underSearchBar,
  setUnderSearchBar,
  placesBar,
  setPlacesBar,
}) => {
  const classes = useStyles();

  return (
    <Paper
      className={
        underSearchBar
          ? clsx(classes.underSearch, classes.open)
          : clsx(classes.underSearch, classes.close)
      }
      elevation={underSearchBar ? 12 : 4}
      square={underSearchBar ? true : false}
      style={{ backgroundColor: !placesBar ? "white" : "#f0f0f0" }}
    >
      {/* {placesBar ? (
        <PlacesUnderSearchBar />
      ) : (
        <MainUnderSearchBar
          setUnderSearchBar={setUnderSearchBar}
          setPlacesBar={setPlacesBar}
        />
      )} */}
      <PlaceDescriptionBar />
    </Paper>
  );
};

export default UnderSearchBar;
