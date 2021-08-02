import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import MainUnderSearchBar from "./MainUnderSearchBar";

const useStyles = makeStyles((theme) => ({
  underSearch: {
    position: "relative",
    backgroundColor: "#f0f0f0",
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

const UnderSearchBar = ({ underSearchBar, setUnderSearchBar }) => {
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
    >
      <MainUnderSearchBar
        underSearchBar={underSearchBar}
        setUnderSearchBar={setUnderSearchBar}
      />
    </Paper>
  );
};

export default UnderSearchBar;
