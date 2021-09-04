import { connect } from "react-redux";
import { setActiveBar, setSearchPrompt } from "../../../redux/active/actions";
import { setPlacePosition } from "./../../../redux/map/actions";
import { setDescriptionData } from "./../../../redux/place/actions";
import { setUnderSearchBar } from "./../../../redux/active/actions";

import History from "./History";

const HistoryContainer = (props) => {
  return (
    <History
      setPlacePosition={props.setPlacePosition}
      setSearchPrompt={props.setSearchPrompt}
      historyItems={props.historyItems}
      setActiveBar={props.setActiveBar}
      setDescriptionData={props.setDescriptionData}
      setUnderSearchBar={props.setUnderSearchBar}
      loading={props.loading}
      content={props.content}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    historyItems: state.search.historyItems,
    loading: state.place.loading,
    content: state.place.content,
  };
};

const mapDispatchToProps = {
  setSearchPrompt,
  setPlacePosition,
  setDescriptionData,
  setActiveBar,
  setUnderSearchBar,
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
