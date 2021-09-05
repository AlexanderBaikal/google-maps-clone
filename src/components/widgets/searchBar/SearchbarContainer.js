import SearchBar from "./SearchBar";
import { setSearchPrompt } from "./../../../redux/active/actions";
import { setMenuSidebar } from "./../../../redux/active/actions";
import { setUnderSearchBar } from "./../../../redux/active/actions";
import { setActiveBar } from "./../../../redux/active/actions";
import { setContent } from "../../../redux/place/actions";
import { connect } from "react-redux";
import { loadAllPlaces } from "./../../../redux/places/actions";
import { setHistoryItems } from "../../../redux/search/actions";
import { setPlacesData } from "./../../../redux/places/actions";
import { useEffect } from "react";

const SearchbarContainer = (props) => {
  useEffect(() => {
    props.loadAllPlaces();
  }, []);

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
      setContent={props.setContent}
      anyLoading={props.anyLoading}
      anyPlaces={props.anyPlaces}
      setHistoryItems={props.setHistoryItems}
      setPlacesData={props.setPlacesData}
      historyItems={props.historyItems}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    activeBar: state.active.activeBar,
    underSearchBar: state.active.underSearchBar,
    searchPrompt: state.active.searchPrompt,
    menuSidebar: state.app.menuSidebar,
    anyLoading: state.places.loading || state.place.loading,
    anyPlaces: state.places.anyPlaces,
    historyItems: state.search.historyItems,
  };
};

const mapDispatchToProps = {
  setUnderSearchBar,
  setMenuSidebar,
  setSearchPrompt,
  setActiveBar,
  setContent,
  loadAllPlaces,
  setHistoryItems,
  setPlacesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchbarContainer);
