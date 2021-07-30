import { Button, makeStyles } from "@material-ui/core";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import clsx from "clsx";

const useStyles = makeStyles({
  horizontalWidget: {
    marginTop: "5px",
    width: "145px",
    height: "30px",
    display: "flex",
  },

  streetView: {
    display: "flex",
  },

  streetViewButton: {
    borderRadius: "8px 0 0 8px",
    maxWidth: "31px",
    minWidth: "31px",
    padding: "3px",
  },

  streetViewIcon: {
    backgroundSize: "28px 120px",
    backgroundPosition: "0px -31px",
    backgroundRepeat: "no-repeat",
    height: "30px",
    width: "31px",
    backgroundImage:
      "url(//maps.gstatic.com/tactile/pegman_v3/default/runway-2x.png);",
  },

  buttonWhite: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  gallery: {
    display: "flex",
  },

  galleryButton: {
    borderRadius: "0 8px 8px 0",
    padding: 0,
  },

  galleryLabel: {
    height: "30px",
    width: "80px",
    lineHeight: "30px",
    top: 0,
    left: 0,
    display: "block",
    cursor: "pointer",
    textAlign: "left",
    backgroundRepeat: "no-repeat",
    fontSize: "12px",
    fontWeight: "400",
    backgroundPosition: "8px 8px",
    color: "transparent",
    backgroundImage:
      "url(//maps.gstatic.com/tactile/runway/imagery-show-1x.png)",
    backgroundSize: "60px 15px",
  },

  expandIcon: {
    marginRight: "7.5px",
    marginLeft: "7.5px",
    fill: "rgb(100, 100, 100)",
  },
});

const HorizontalWidget = () => {
  const classes = useStyles();
  return (
    <div className={classes.horizontalWidget}>
      <div className={classes.streetView}>
        <Button
          variant="contained"
          className={clsx(classes.streetViewButton, classes.buttonWhite)}
        >
          <div className={classes.streetViewIcon}></div>
        </Button>
      </div>
      <div className={classes.gallery}>
        <Button
          variant="contained"
          className={clsx(classes.galleryButton, classes.buttonWhite)}
        >
          <label className={classes.galleryLabel}></label>
          <DoubleArrowRoundedIcon
            fontSize="small"
            className={classes.expandIcon}
            transform="rotate(-90)"
            fill=""
          />
        </Button>
      </div>
    </div>
  );
};

export default HorizontalWidget;
