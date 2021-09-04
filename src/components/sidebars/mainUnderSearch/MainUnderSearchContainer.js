import MainUnderSearchBar from "./MainUnderSearchBar";
import { setUnderSearchBar } from "../../../redux/active/actions";
import { connect } from "react-redux";
import { setShownMore } from "./../../../redux/active/actions";

const MainUnderSearchContainer = (props) => {
  return (
    <MainUnderSearchBar
      underSearchBar={props.underSearchBar}
      setUnderSearchBar={props.setUnderSearchBar}
      shownMore={props.shownMore}
      setShownMore={props.setShownMore}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.active.underSearchBar,
    activeBar: state.active.activeBar,
    shownMore: state.active.shownMore,
  };
};

const mapDispatchToProps = {
  setUnderSearchBar,
  setShownMore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUnderSearchContainer);
