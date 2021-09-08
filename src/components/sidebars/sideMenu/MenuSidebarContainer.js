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
      dispatch(loadImages(props.descriptionData));
      dispatch(loadComments(props.descriptionData));
    }
  }, [props.descriptionData]);

  useEffect(() => {
    if (
      props.content &&
      props.content.photoFolder &&
      props.content.name !== props.content.photoFolder
    ) {
      dispatch(loadComments(props.content.photoFolder));
      dispatch(loadImages(props.content.photoFolder));
    }
  }, [props.content, props.descriptionData]);

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
    content: state.place.content,
  };
};

const mapDispatchToProps = {
  setMenuSidebar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuSidebarContainer);
