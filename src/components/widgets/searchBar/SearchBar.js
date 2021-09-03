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
  CircularProgress,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Extras from "./../../inlines/Extras";
import History from "../../inlines/History";
import CloseIcon from "@material-ui/icons/Close";
import { MAIN_UNDERSEARCH_BAR } from "../../../redux/active/actions";
import PromptBlock from "./PromptBlock";

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
  };
});

const SearchBar = ({
  menuSidebar,
  setMenuSidebar,
  underSearchBar,
  setUnderSearchBar,
  activeBar,
  setActiveBar,
  searchPrompt,
  setSearchPrompt,
  setContent,
  anyLoading,
  anyPlaces,
  setPlacePosition,
  setPlacesData
}) => {
  const handleUnderSearchBar = () => {
    setUnderSearchBar(!underSearchBar);
    if (!underSearchBar) {
      inputRef.current.focus();
    }
  };
  const handleSearchPrompt = () => {
    setSearchPrompt();
  };

  const handleClickOutside = () => {
    if (searchPrompt) setSearchPrompt();
  };

  const handleMenuSidebar = () => {
    setMenuSidebar(!menuSidebar);
  };

  const onDirectionsClick = () => {
    setContent(null);
    setPlacesData(null)
    setActiveBar(MAIN_UNDERSEARCH_BAR);
  };

  
  const inputRef = useRef(null);
  const classes = useStyles();

  const [inputValue, setinputValue] = useState("");

  let historyItems = anyPlaces || [];

  historyItems = historyItems
    .filter((el) =>
      el.name
        .toLowerCase()
        .startsWith(inputValue ? inputValue.toLowerCase() : "")
    )
    .slice(0, 3);

  return (
    <ClickAwayListener onClickAway={handleClickOutside}>
      <div className={classes.searchbar}>
        <Paper
          component="form"
          variant={underSearchBar ? "outlined" : "elevation"}
          className={
            searchPrompt && historyItems.length
              ? clsx(classes.paper, classes.bottomRound)
              : classes.paper
          }
          elevation={searchPrompt ? 1 : 2}
          onFocus={handleSearchPrompt}
        >
          <IconButton
            className={classes.iconButton}
            aria-label="menu"
            onClick={handleMenuSidebar}
          >
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputRef={inputRef}
            onChange={(e) => setinputValue(e.target.value)}
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
            aria-label="right btn"
            onClick={
              activeBar !== MAIN_UNDERSEARCH_BAR ? onDirectionsClick : () => {}
            }
          >
            {anyLoading ? (
              <CircularProgress size={20} />
            ) : activeBar !== MAIN_UNDERSEARCH_BAR ? (
              <CloseIcon />
            ) : (
              <DirectionsIcon />
            )}
          </IconButton>
        </Paper>

        <PromptBlock
          searchPrompt={searchPrompt}
          historyItems={historyItems}
          underSearchBar={underSearchBar}
          handleUnderSearchBar={handleUnderSearchBar}
          setActiveBar={setActiveBar}
          setPlacePosition={setPlacePosition}
          handleSearchPrompt={handleSearchPrompt}
          setUnderSearchBar={setUnderSearchBar}
          setSearchPrompt={setSearchPrompt}
          setPlacesData={setPlacesData}
        />
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
