import { connect } from "react-redux";
import { setBottomGallery } from "../../../redux/active/actions";
import HorizontalWidget from "./HorizontalWidget";

const HorizontalContainer = (props) => {
  return (
    <HorizontalWidget
      bottomGallery={props.bottomGallery}
      setBottomGallery={props.setBottomGallery}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    bottomGallery: state.active.bottomGallery,
  };
};

const mapDispatchToProps = {
  setBottomGallery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalContainer);
