import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import {
  DESCRIPTION_BAR,
  MAIN_UNDERSEARCH_BAR,
  PLACES_BAR,
} from "../../redux/sidebars/actions";
import MainUnderSearchContainer from "./nested/MainUnderSearchContainer";
import PlaceDescriptionContainer from "./nested/PlaceDescriptionContainer";
import PlacesContainer from "./nested/PlacesContainer";

const useStyles = makeStyles((theme) => ({
  underSearch: {
    position: "relative",

    height: "100vh",
    width: "423px",
    overflow: "auto",
  },

  visible: {
    display: "block",
  },

  close: {
    display: "none",
  },
}));

const UnderSearchBar = ({ underSearchBar, activeBar }) => {
  const classes = useStyles();

  const renderSwitch = (param) => {
    switch (param) {
      case PLACES_BAR:
        return <PlacesContainer />;
      case DESCRIPTION_BAR:
        return <PlaceDescriptionContainer />;
      default:
        return <MainUnderSearchContainer />;
    }
  };

  return (
    <Paper
      className={
        underSearchBar
          ? clsx(classes.underSearch, classes.open)
          : clsx(classes.underSearch, classes.close)
      }
      elevation={underSearchBar ? 12 : 4}
      square={underSearchBar ? true : false}
      style={{
        backgroundColor:
          activeBar !== MAIN_UNDERSEARCH_BAR ? "white" : "#f0f0f0",
      }}
    >
      {renderSwitch(activeBar)}
    </Paper>
  );
};

export default UnderSearchBar;
