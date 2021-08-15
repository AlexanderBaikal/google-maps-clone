import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import {
  IconButton,
  Divider,
  InputBase,
  Paper,
  ListItemText,
  makeStyles,
  ClickAwayListener,
} from "@material-ui/core";
import { useRef, useState } from "react";
import clsx from "clsx";
import Extras from "./../../inlines/Extras";
import History from "../../inlines/History";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => {
  return {
    searchbar: {
      position: "absolute",
      zIndex: 2,
      left: "7px",
      top: "7px",
    },
    paper: {
      width: "395px",
      padding: "0 4px",
      display: "flex",
      alignItems: "center",
    },

    bottomRound: {
      borderRadius: "8px 8px 0 0",
    },

    colorInfo: {
      color: "#64b5f6",
    },

    colorSecondary: {
      color: "#bdbdbd",
    },

    input: {
      marginLeft: "13px",
      flex: 1,
    },
    divider: {
      height: "28px",
      margin: "4px",
    },

    listItemText: {
      fontSize: "0.75rem",
    },
    listItem: {
      paddingTop: "5px",
    },
    listItemIcon: {
      minWidth: "47px",
      marginLeft: "3px",
      color: theme.palette.grey[500],
    },
    history: {
      position: "relative",
      borderRadius: "0 0 8px 8px",
      zIndex: -1,
    },
    underHistory: {
      position: "relative",
      marginTop: "10px",
    },
    prompt: {
      color: theme.palette.grey[500],
      position: "relative",
      zIndex: -1,
      cursor: "pointer",
      display: "flex",
      top: "-20px",
      padding: "20px 4px 0 4px",
      "&:hover": {
        color: "black",
      },
    },
    promptButton: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    promptText: {
      marginLeft: "13px",
      marginRight: "20px",
      color: "inherit",
    },
    underHistoryPrompt: {
      color: theme.palette.grey[500],
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        color: "black",
      },
    },
    underHistoryPromptText: {
      textAlign: "center",
      width: "300px",
      color: "inherit",
    },
    dividerHorizontal: {
      height: "0px",
      borderTop: "1px solid #E8EAED",
    },
  };
});

const SearchBar = ({
  setMenuSidebar,
  underSearchBar,
  setUndersearchBar,
  placesBar,
  setPlacesBar,
  searchPrompt,
  setSearchPrompt,
}) => {
  const handleUnderSearchBar = () => {
    console.log(underSearchBar);
    setUndersearchBar(!underSearchBar);
    if (!underSearchBar) {
      inputRef.current.focus();
    }
  };

  const handleClickOutside = () => {
    setSearchPrompt(false);
  };

  const promptText = "Show traffic jams, expected time and places close to you";
  const inputRef = useRef(null);
  const classes = useStyles();

  return (
    <ClickAwayListener onClickAway={handleClickOutside}>
      <div className={classes.searchbar}>
        <Paper
          component="form"
          variant={underSearchBar ? "outlined" : "elevation"}
          className={
            searchPrompt
              ? clsx(classes.paper, classes.bottomRound)
              : classes.paper
          }
          elevation={searchPrompt ? 1 : 2}
          onFocus={() => {
            setSearchPrompt(true);
          }}
        >
          <IconButton
            className={classes.iconButton}
            aria-label="menu"
            onClick={setMenuSidebar}
          >
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputRef={inputRef}
          />
          <IconButton
            type="submit"
            color="secondary"
            classes={{ colorSecondary: classes.colorSecondary }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            classes={{ colorPrimary: classes.colorInfo }}
            aria-label="directions"
            onClick={placesBar ? setPlacesBar : () => {}}
          >
            {placesBar ? <CloseIcon /> : <DirectionsIcon />}
          </IconButton>
        </Paper>

        {searchPrompt || underSearchBar ? (
          <>
            {searchPrompt ? (
              <Paper elevation={2} className={classes.history}>
                <History />
              </Paper>
            ) : null}
            {!underSearchBar ? (
              <Paper className={classes.underHistory} elevation={2}>
                <Extras countItems={4} />
                <div className={classes.dividerHorizontal} />
                <div
                  className={classes.underHistoryPrompt}
                  onClick={handleUnderSearchBar}
                >
                  <IconButton
                    className={classes.promptButton}
                    style={{ marginLeft: "4px" }}
                    aria-label="show extras"
                  >
                    <KeyboardArrowDownOutlinedIcon />
                  </IconButton>
                  <ListItemText
                    secondaryTypographyProps={{
                      className: classes.underHistoryPromptText,
                    }}
                    secondary={"Show similar"}
                  />
                </div>
              </Paper>
            ) : null}
          </>
        ) : (
          <Paper onClick={handleUnderSearchBar} className={classes.prompt}>
            <IconButton
              className={classes.promptButton}
              aria-label="show extras"
            >
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
            <ListItemText
              secondaryTypographyProps={{ className: classes.promptText }}
              secondary={promptText}
            />
          </Paper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
