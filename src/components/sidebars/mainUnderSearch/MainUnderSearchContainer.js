import MainUnderSearchBar from "./MainUnderSearchBar";
import { setUnderSearchBar } from "../../../redux/widgets/actions";
import {setActiveBar} from '../../../redux/sidebars/actions'
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
    underSearchBar: state.widgets.all.underSearchBar,
    activeBar: state.sidebars.activeBar,
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


