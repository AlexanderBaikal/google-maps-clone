import MainUnderSearchBar from "./MainUnderSearchBar";
import { setUnderSearchBar } from "../../../redux/active/actions";
import {setActiveBar} from '../../../redux/active/actions'
import { connect } from "react-redux";

const MainUnderSearchContainer = (props) => {
  return (
    <MainUnderSearchBar
      underSearchBar={props.underSearchBar}
      setUnderSearchBar={props.setUnderSearchBar}
      setActiveBar={props.setActiveBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    underSearchBar: state.active.underSearchBar,
    activeBar: state.active.activeBar,
  };
};

const mapDispatchToProps = {
  setActiveBar,
  setUnderSearchBar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUnderSearchContainer);


