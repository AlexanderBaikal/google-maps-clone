import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import UnderSearchBar from "../sidebars/underSearchBar/UnderSearchBar";
import HorizontalWidget from "./horizontalWidget/HorizontalWidget";
import MinimapWidget from "./minimapWidget/MinimapWidget";
import SearchBar from "./searchBar/SearchBar";
import UserWidget from "./userWidget/UserWidget";
import VerticalWidget from "./verticalWidget/VerticalWidget";

const useStyles = makeStyles({
  bottomRightWidgets: {
    position: "absolute",
    right: "20px",
    bottom: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 501,
  },

  bottomLeftWidgets: {
    bottom: 0,
    left: "20px",
    position: "absolute",
    zIndex: 501,
    transition: "left 200ms cubic-bezier(0, 0, 0.2, 1)",
  },
  shift: {
    left: "440px",
  },

  topLeftWidgets: {
    top: "0px",
    left: "0px",
    position: "absolute",
    zIndex: 501,
  },

  topRightWidgets: {
    top: "15px",
    right: "30px",
    position: "absolute",
    zIndex: 501,
  },
});

const Widgets = ({ menuSidebar, handleMenuSidebar, setZoomDelta }) => {
  const [searchPrompt, setSearchPrompt] = useState(false);
  const [underSearchBar, setUnderSearchBar] = useState(false);
  const classes = useStyles();

  return (
    <>
      <div className={classes.bottomRightWidgets}>
        <VerticalWidget setZoomDelta={setZoomDelta} />
        <HorizontalWidget className="horizontal-widget" />
      </div>
      <div
        className={
          underSearchBar
            ? clsx(classes.bottomLeftWidgets, classes.shift)
            : classes.bottomLeftWidgets
        }
      >
        <MinimapWidget />
      </div>
      <div className={classes.topLeftWidgets}>
        <SearchBar
          menuSidebar={menuSidebar}
          handleMenuSidebar={handleMenuSidebar}
          searchPrompt={searchPrompt}
          setSearchPrompt={setSearchPrompt}
          underSearchBar={underSearchBar}
          setUnderSearchBar={setUnderSearchBar}
        />
        <UnderSearchBar
          searchPrompt={searchPrompt}
          setSearchPrompt={setSearchPrompt}
          underSearchBar={underSearchBar}
          setUnderSearchBar={setUnderSearchBar}
        />
      </div>
      <div className={classes.topRightWidgets}>
        <UserWidget />
      </div>
    </>
  );
};

export default Widgets;
