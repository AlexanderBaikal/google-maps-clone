import { Button, makeStyles } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  textSecondary: {
    fill: "rgb(50, 50, 50)",
  },
  controlButton: {
    backgroundColor: "white",
    maxHeight: "30px",
    maxWidth: "30px",
    minHeight: "30px",
    minWidth: "30px",
    borderRadius: "8px",
  },
  zoom: {
    marginTop: "4px",
    position: "relative",
  },
  buttons: {
    height: "60px",
  },
  zoomInButton: {
    position: "absolute",
    top: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  zoomOutButton: {
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));

const VerticalWidget = ({ setZoomDelta }) => {
  const classes = useStyles();

  const zoomIn = () => {
    setZoomDelta(1);
  };
  const zoomOut = () => {
    setZoomDelta(-1);
  };

  return (
    <div>
      <div>
        <Button variant="contained" className={classes.controlButton}>
          <MyLocationIcon fontSize="small" className={classes.textSecondary} />
        </Button>
      </div>
      <div className={classes.zoom}>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            className={clsx(classes.controlButton, classes.zoomInButton)}
            onClick={zoomIn}
          >
            <AddIcon fontSize="small" className={classes.textSecondary} />
          </Button>
          <Button
            variant="contained"
            className={clsx(classes.controlButton, classes.zoomOutButton)}
            onClick={zoomOut}
          >
            <RemoveIcon fontSize="small" className={classes.textSecondary} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerticalWidget;
