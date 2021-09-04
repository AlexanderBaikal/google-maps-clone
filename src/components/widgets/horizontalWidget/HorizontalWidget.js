import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import clsx from "clsx";

const useStyles = makeStyles({
  horizontalWidget: {
    marginTop: "5px",
    height: "30px",
    pointerEvents: "auto"
  },

  buttonRoot: {
    padding: 0,
  },

  streetViewIcon: {
    backgroundSize: "28px 120px",
    backgroundPosition: "0px -31px",
    backgroundRepeat: "no-repeat",
    height: "30px",
    width: "27px",
    backgroundImage:
      "url(//maps.gstatic.com/tactile/pegman_v3/default/runway-2x.png);",
  },

  buttonWhite: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  galleryButton: {
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
    backgroundPosition: "8px 8px",
    color: "transparent",
    backgroundImage:
      "url(//maps.gstatic.com/tactile/runway/imagery-show-1x.png)",
    backgroundSize: "60px 15px",
  },

  galleryLabelExtended: {
    textTransform: "none",
    marginLeft: "12px",
    marginRight: "2px",
    fontSize: "0.8rem",
    fontWeight: 400,
    textAlign: "end",
    color: "#222",
  },

  expandIcon: {
    padding: "6px",
    fill: "rgb(100, 100, 100)",
  },
});

const HorizontalWidget = ({ bottomGallery, setBottomGallery }) => {
  const classes = useStyles();

  return (
    <ButtonGroup
      className={classes.horizontalWidget}
      variant="contained"
      aria-label="contained primary button group"
    >
      <Button
        variant="contained"
        disableElevation
        classes={{ root: classes.buttonRoot }}
        className={clsx(classes.streetViewButton, classes.buttonWhite)}
        style={{
          borderRadius: bottomGallery ? "8px 0 0 0" : "8px 0 0 8px",
          borderRight: "1px solid #e6e6e6",
        }}
      >
        <div className={classes.streetViewIcon}></div>
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => setBottomGallery(!bottomGallery)}
        className={clsx(classes.galleryButton, classes.buttonWhite)}
        style={{ borderRadius: bottomGallery ? "0 8px 0 0" : "0 8px 8px 0" }}
      >
        <label
          className={
            bottomGallery ? classes.galleryLabelExtended : classes.galleryLabel
          }
        >
          {bottomGallery ? "Images" : ""}
        </label>
        <DoubleArrowRoundedIcon
          fontSize="small"
          className={classes.expandIcon}
          transform={bottomGallery ? "rotate(90)" : "rotate(-90)"}
          fill=""
        />
      </Button>
    </ButtonGroup>
  );
};

export default HorizontalWidget;
