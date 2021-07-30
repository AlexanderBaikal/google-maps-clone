import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import {
  IconButton,
  Divider,
  InputBase,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import { useRef } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    searchbar: {
      position: "absolute",
      zIndex: 2,
      left: "7px",
      top: "7px",
      width: "408px",
    },
    paper: {
      width: "400px",
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
  };
});

const SearchBar = ({
  handleMenuSidebar,
  searchPrompt,
  setSearchPrompt,
  underSearchBar,
  setUnderSearchBar,
}) => {
  const handleUnderSearchBar = () => {
    setUnderSearchBar((value) => !value);
    if (!underSearchBar) {
      inputRef.current.focus();
    }
  };

  const promptText = "Show traffic jams, expected time and places close to you";
  const inputRef = useRef(null);

  const historyItems = ["United Kingdom", "Big Ben"];
  const classes = useStyles();

  return (
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
        onFocus={() => setSearchPrompt(true)}
        onBlur={() => setSearchPrompt(false)}
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
        />
        <IconButton
          type="submit"
          color="secondary"
          classes={{ colorSecondary: classes.colorSecondary }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className="divider" orientation="vertical" />
        <IconButton
          color="primary"
          classes={{ colorPrimary: classes.colorInfo }}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>

      {searchPrompt || underSearchBar ? (
        <Paper elevation={!searchPrompt ? 0 : 2} className={classes.history}>
          <List>
            {historyItems.map((item) => (
              <ListItem button key={item} className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <ScheduleOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Paper onClick={handleUnderSearchBar} className={classes.prompt}>
          <IconButton className={classes.promptButton} aria-label="show extras">
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
          <ListItemText
            secondaryTypographyProps={{ className: classes.promptText }}
            secondary={promptText}
          />
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
