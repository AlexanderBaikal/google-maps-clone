import SearchBar from "./SearchBar";
import { setSearchPrompt } from "./../../../redux/widgets/search/actions";
import { setMenuSidebar } from "./../../../redux/actions";
import { setUnderSearchBar } from "./../../../redux/widgets/actions";
import { setActiveBar } from "./../../../redux/sidebars/actions";
import { connect } from "react-redux";

const SearchbarContainer = (props) => {
  return (
    <SearchBar
      activeBar={props.activeBar}
      setActiveBar={props.setActiveBar}
      underSearchBar={props.underSearchBar}
      setUnderSearchBar={props.setUnderSearchBar}
      menuSidebar={props.menuSidebar}
      setMenuSidebar={props.setMenuSidebar}
      searchPrompt={props.searchPrompt}
      setSearchPrompt={props.setSearchPrompt}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    activeBar: state.sidebars.activeBar,
    underSearchBar: state.widgets.all.underSearchBar,
    searchPrompt: state.widgets.searchPrompt.searchPrompt,
    menuSidebar: state.app.menuSidebar,
  };
};

const mapDispatchToProps = {
  setUnderSearchBar,
  setMenuSidebar,
  setSearchPrompt,
  setActiveBar,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchbarContainer);
