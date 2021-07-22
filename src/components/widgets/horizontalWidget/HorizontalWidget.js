import { Button } from "@material-ui/core";
import "./_horizontalWidget.scss";
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';

const HorizontalWidget = () => {
  return (
    <div className="horizontal-widget">
      <div className="horizontal-widget__street-view">
        <Button variant="contained" className="street-view-button inline-btn">
          <div className="street-view-icon"></div>
        </Button>
      </div>
      <div className="horizontal-widget__gallery">
        <Button variant="contained" className="gallery-button inline-btn">
          <label className="gallery-label"></label>
          <DoubleArrowRoundedIcon fontSize="small" className="expand-icon" transform='rotate(-90)' fill=""/>
        </Button>
      </div>
    </div>
  );
};

export default HorizontalWidget;
