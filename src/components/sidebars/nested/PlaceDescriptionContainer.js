import PlaceDescriptionBar from "./PlaceDescriptionBar";
import { setActiveBar } from "./../../../redux/sidebars/actions";
import { connect, useDispatch } from "react-redux";
import { loadData } from "../../../redux/sidebars/placeDescription/actions";
import { useEffect } from "react";

const PlaceDescriptionContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <>
      {props.content && (
        <PlaceDescriptionBar
          setActiveBar={props.setActiveBar}
          content={props.content}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.sidebars.descriptionBar.content,
  };
};

const mapDispatchToProps = {
  setActiveBar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDescriptionContainer);
