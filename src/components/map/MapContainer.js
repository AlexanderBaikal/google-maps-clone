import Map from "./Map";
import { setZoomDelta } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { setOpenEditInfo } from "./../../redux/active/actions";
import { setContent, setContentSnapshot } from "./../../redux/place/actions";
import { useEffect } from "react";
import { loadAllPoints } from "../../redux/points/actions";
import { setDescriptionData } from "./../../redux/place/actions";
import { setActiveBar, setUnderSearchBar } from "./../../redux/active/actions";
import { loadData } from "../../redux/place/actions";

const MapContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllPoints());
  }, []);

  return (
    <Map
      zoomDelta={props.zoomDelta}
      setZoomDelta={props.setZoomDelta}
      setOpenEditInfo={props.setOpenEditInfo}
      setContent={props.setContent}
      setContentSnapshot={props.setContentSnapshot}
      points={props.points}
      setDescriptionData={props.setDescriptionData}
      setActiveBar={props.setActiveBar}
      loadData={props.loadData}
      setUnderSearchBar={props.setUnderSearchBar}
      currentCoords={props.currentCoords}
      profile={props.profile}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    zoomDelta: state.app.zoomDelta,
    points: state.points.all,
    currentCoords: state.map.coords,
    profile: state.auth.profile
  };
};

const mapDispatchToProps = {
  setZoomDelta,
  setOpenEditInfo,
  setContent,
  setContentSnapshot,
  setActiveBar,
  setDescriptionData,
  loadData,
  setUnderSearchBar,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
