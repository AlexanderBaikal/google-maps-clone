import { Button } from "@material-ui/core";
import "./_verticalWidget.scss";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const VerticalWidget = ({ setZoomDelta }) => {
  const zoomIn = () => {
    setZoomDelta(1);
  };
  const zoomOut = () => {
    setZoomDelta(-1);
  };

  return (
    <div className="vertical-widget">
      <div className="vertical-widget__my-location">
        <Button variant="contained" className="control-button">
          <MyLocationIcon fontSize="small" className="text-secondary" />
        </Button>
      </div>
      <div className="vertical-widget__zoom">
        <div className="vertical-widget__zoom__buttons">
          <Button
            variant="contained"
            className="control-button zoom-in-button"
            onClick={zoomIn}
          >
            <AddIcon fontSize="small" className="text-secondary" />
          </Button>
          <Button
            variant="contained"
            className="control-button zoom-out-button"
            onClick={zoomOut}
          >
            <RemoveIcon fontSize="small" className="text-secondary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerticalWidget;
