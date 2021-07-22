import "./_searchBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";

const SearchBar = ({ menuSidebar, handleMenuSidebar }) => {
  return (
    <Paper component="form" className="search-bg">
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
  );
};

export default SearchBar;
