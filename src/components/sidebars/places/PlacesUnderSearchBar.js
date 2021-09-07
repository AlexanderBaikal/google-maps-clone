import {
  Divider,
  makeStyles,
  Button,
  Paper,
  Typography,
  IconButton,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TuneIcon from "@material-ui/icons/Tune";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Popper } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import PlacesList from "./../../inlines/PlacesList";

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    borderRadius: "100px",
    margin: "0 3px",
    padding: "2px 11px",
    fontWeight: 400,
  },
  header: {
    height: "110px",
  },
  topButtons: {
    marginLeft: "10px",
    width: "calc(100% - 20px)",
    position: "absolute",
  },
  topButtonsOverflow: {
    width: "100%",
    position: "absolute",
  },

  footerTop: {
    padding: "10px 25px",
    display: "flex",
    justifyContent: "space-between",
  },
  footerIcon: {
    fontSize: "1rem",
  },
  footerButton: {
    marginLeft: "15px",
    marginRight: "7px",
  },
  typography: {
    padding: theme.spacing(2),
  },
  radioPopover: {
    padding: "12px",
  },
  radioLabel: {
    fontSize: "0.8rem",
    marginLeft: "10px",
  },
  radioSpacing: {
    height: "30px",
  },
  topSpan: {
    "@media screen and (max-width: 340px)": {
      display: "none",
    },
  },
}));

const PlacesUnderSearchBar = ({
  setActiveBar,
  allPlaces,
  setDescriptionData,
  anyLoading,
  content,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const [value, setValue] = useState("Any time");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const places = [
  //   {
  //     name: "24/7 store",
  //     type: "Grocery store",
  //     address: "Central st., 99",
  //     openInfo: "Open until 22:00",
  //     extraInfo: "In-store shopping",
  //     photoUrl:
  //       "https://maps.gstatic.com/tactile/pane/result-no-thumbnail-2x.png",
  //     rating: {
  //       value: 3.5,
  //       count: 163,
  //     },
  //   },

  return (
    <div className={classes.root}>
      <Paper square variant={"outlined"} className={classes.header}>
        <div style={{ height: "70px" }} />
        <div className={classes.topButtons}>
          <div className={classes.topButtonsOverflow}>
            <Button
              variant="outlined"
              className={classes.button}
              aria-describedby={id}
              onClick={handleClick}
              style={{ paddingRight: "4px" }}
            >
              <span className={classes.topSpan}>Rating</span>
              <ArrowDropDownIcon />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              elevation={3}
            >
              <FormControl
                component="fieldset"
                className={classes.radioPopover}
                size="small"
              >
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Any time"
                    control={<Radio color="primary" size="small" />}
                    label="Any time"
                    classes={{
                      label: classes.radioLabel,
                      root: classes.radioSpacing,
                    }}
                  />
                  <FormControlLabel
                    value="Open now"
                    control={<Radio color="primary" size="small" />}
                    label="Open now"
                    classes={{
                      label: classes.radioLabel,
                      root: classes.radioSpacing,
                    }}
                  />
                  <FormControlLabel
                    value="Open 24 hours"
                    control={<Radio color="primary" size="small" />}
                    label="Open 24 hours"
                    classes={{
                      label: classes.radioLabel,
                      root: classes.radioSpacing,
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Popover>

            <Button
              variant="outlined"
              className={classes.button}
              onClick={handleClick}
              style={{ paddingRight: "4px" }}
            >
              <span className={classes.topSpan}>Hours</span>
              <ArrowDropDownIcon />
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <div className={classes.paper}>The content of the Popper.</div>
            </Popper>

            <Button
              variant="outlined"
              className={classes.button}
              style={{ padding: "2px 15px" }}
              onClick={handleClick}
              color="primary"
            >
              <TuneIcon
                color="primary"
                fontSize="small"
                style={{ marginRight: "4px" }}
              />
              <span className={classes.topSpan}>More filters</span>
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <div className={classes.paper}>The content of the Popper.</div>
            </Popper>
          </div>
        </div>
      </Paper>
      <PlacesList
        setActiveBar={setActiveBar}
        items={allPlaces}
        setDescriptionData={setDescriptionData}
        loading={anyLoading}
        data={content}
      />
      <div className={classes.footer}>
        <Divider />
        <div className={classes.footerTop}>
          <Typography color="textSecondary" style={{ fontSize: "0.8rem" }}>
            Showing results 0 - {allPlaces.length}
          </Typography>
          <div>
            <IconButton
              aria-label="back"
              size="small"
              className={classes.footerButton}
            >
              <ArrowBackIosIcon
                fontSize="small"
                classes={{ fontSizeSmall: classes.footerIcon }}
              />
            </IconButton>
            <IconButton
              aria-label="next"
              size="small"
              className={classes.footerButton}
            >
              <ArrowForwardIosIcon
                fontSize="small"
                classes={{ fontSizeSmall: classes.footerIcon }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesUnderSearchBar;
