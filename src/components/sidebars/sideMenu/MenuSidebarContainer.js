import { connect } from "react-redux";
import MenuSidebar from "./MenuSidebar";
import { setMenuSidebar } from "../../../redux/actions";

const MenuSidebarContainer = (props) => {
  return (
    <MenuSidebar
      menuSidebar={props.menuSidebar}
      setMenuSidebar={props.setMenuSidebar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    menuSidebar: state.app.menuSidebar,
  };
};

const mapDispatchToProps = {
  setMenuSidebar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuSidebarContainer);
