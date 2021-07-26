import "./_searchBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

import {
  IconButton,
  Divider,
  InputBase,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import { useEffect } from "react";

const SearchBar = ({
  handleMenuSidebar,
  searchPrompt,
  setSearchPrompt,
  underSearchBar,
}) => {
  return (
    <div className="search-bar">
      <Paper
        component="form"
        variant={underSearchBar ? "outlined" : "elevation"}
        className={
          searchPrompt ? "search-bar-paper bottom-round" : "search-bar-paper"
        }
        elevation={searchPrompt ? 1 : 2}
        onFocus={() => setSearchPrompt(true)}
        onBlur={() => setSearchPrompt(false)}
      >
        <IconButton
          className="icon-button"
          aria-label="menu"
          onClick={handleMenuSidebar}
        >
          <MenuIcon />
        </IconButton>
        <InputBase className="input" placeholder="Search Google Maps" />
        <IconButton
          type="submit"
          className="icon-button color-secondary"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className="divider" orientation="vertical" />
        <IconButton className="icon-button color-info" aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
      {searchPrompt || underSearchBar ? (
        <Paper elevation={!searchPrompt ? 0 : 2} className="search-history">
          <List>
            <ListItem button key={"United Kingdom"} className="list-item">
              <ListItemIcon style={{ minWidth: "32px" }}>
                <ScheduleOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: "list-item-text" }}
                primary={"United Kingdom"}
              />
            </ListItem>
            <ListItem button key={"Big Ben"} className="list-item">
              <ListItemIcon style={{ minWidth: "32px" }}>
                <ScheduleOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: "list-item-text" }}
                primary={"Big Ben"}
              />
            </ListItem>
          </List>
          
        </Paper>
      ) : null}
    </div>
  );
};

export default SearchBar;
