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
    underSearchBar: state.active.underSearchBar,
    activeBar: state.active.activeBar,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnderSearchContainer);
