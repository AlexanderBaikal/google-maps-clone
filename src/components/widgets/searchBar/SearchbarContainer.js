import SearchBar from "./SearchBar";
import {
  setSearchPrompt,
} from "./../../../redux/widgets/search/actions";
import { setMenuSidebar } from "./../../../redux/actions";
import { setUndersearchBar, setPlacesBar } from "./../../../redux/widgets/actions";
import { connect } from "react-redux";

const SearchbarContainer = (props) => {
  return (
    <SearchBar
      placesBar={props.placesBar}
      setPlacesBar={props.setPlacesBar}
      underSearchBar={props.underSearchBar}
      setUndersearchBar={props.setUndersearchBar}
      setMenuSidebar={props.setMenuSidebar}
      searchPrompt={props.searchPrompt}
      setSearchPrompt={props.setSearchPrompt}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    placesBar: state.widgets.all.placesBar,
    underSearchBar: state.widgets.all.underSearchBar,
    searchPrompt: state.widgets.searchPrompt.searchPrompt,
  };
};

const mapDispatchToProps = {
  setPlacesBar,
  setUndersearchBar,
  setMenuSidebar,
  setSearchPrompt,
  setMenuSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchbarContainer);
