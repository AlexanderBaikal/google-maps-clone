import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import BottomGallery from "../map/bottomGallery/BottomGallery";
import UnderSearchBar from "../sidebars/underSearchBar/UnderSearchBar";
import HorizontalWidget from "./horizontalWidget/HorizontalWidget";
import MinimapWidget from "./minimapWidget/MinimapWidget";
import SearchBar from "./searchBar/SearchBar";
import UserWidget from "./userWidget/UserWidget";
import VerticalWidget from "./verticalWidget/VerticalWidget";

const useStyles = makeStyles({
  bottomRightWidgets: {
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 501,
    width: "100%",
  },

  bottomLeftWidgets: {
    bottom: 0,
    left: "20px",
    position: "absolute",
    zIndex: 501,
    // transition: "left 200ms cubic-bezier(0, 0, 0.2, 1)",
  },

  shift: {
    left: "423px",
    position: "absolute",
    bottom: 0,
    width: "calc(100vw - 423px)"
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

  tools: {
    position: "relative",
    right: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  bottomWidgets: {
  },
});

const Widgets = ({ menuSidebar, handleMenuSidebar, setZoomDelta }) => {
  const [searchPrompt, setSearchPrompt] = useState(false);
  const [underSearchBar, setUnderSearchBar] = useState(false);
  const [bottomGallery, setBottomGallery] = useState(false);
  const classes = useStyles();

  return (
    <>
      <div
        className={
          underSearchBar
            ? clsx(classes.bottomWidgets, classes.shift)
            : classes.bottomWidgets
        }
      >
        <div className={classes.bottomRightWidgets}>
          <div
            className={classes.tools}
            style={{ bottom: bottomGallery ? 0 : "25px" }}
          >
            <VerticalWidget setZoomDelta={setZoomDelta} />
            <HorizontalWidget
              className="horizontal-widget"
              bottomGallery={bottomGallery}
              setBottomGallery={setBottomGallery}
            />
          </div>
          {bottomGallery ? <BottomGallery /> : null}
        </div>
        <div className={classes.bottomLeftWidgets}>
          <MinimapWidget bottomGallery={bottomGallery} />
        </div>
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
