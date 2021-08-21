import UnderSearchBar from "./UnderSearchBar";
import { connect } from "react-redux";

const UnderSearchContainer = (props) => {
  return (
    <UnderSearchBar
      underSearchBar={props.underSearchBar}
      activeBar={props.activeBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.widgets.all.underSearchBar,
    activeBar: state.sidebars.activeBar.activeBar,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnderSearchContainer);
