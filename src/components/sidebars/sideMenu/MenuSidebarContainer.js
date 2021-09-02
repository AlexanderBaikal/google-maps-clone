import { connect, useDispatch } from "react-redux";
import MenuSidebar from "./MenuSidebar";
import { setMenuSidebar } from "../../../redux/active/actions";
import { loadData } from "../../../redux/place/actions";
import { loadComments } from "../../../redux/comments/actions";
import { loadImages } from "../../../redux/images/actions";
import { useEffect } from "react";

const MenuSidebarContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.descriptionData) {
      dispatch(loadData(props.descriptionData));
      dispatch(loadComments(props.descriptionData));
      dispatch(loadImages(props.descriptionData));
    }
  }, [props.descriptionData]);

  return (
    <MenuSidebar
      menuSidebar={props.menuSidebar}
      setMenuSidebar={props.setMenuSidebar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    menuSidebar: state.active.menuSidebar,
    descriptionData: state.place.descriptionData,
  };
};

const mapDispatchToProps = {
  setMenuSidebar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuSidebarContainer);
