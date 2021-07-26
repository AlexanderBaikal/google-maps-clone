import { useState } from "react";
import UnderSearchBar from "../sidebars/underSearchBar/UnderSearchBar";
import HorizontalWidget from "./horizontalWidget/HorizontalWidget";
import MinimapWidget from "./minimapWidget/MinimapWidget";
import SearchBar from "./searchBar/SearchBar";
import UserWidget from "./userWidget/UserWidget";
import VerticalWidget from "./verticalWidget/VerticalWidget";
import "./_widgets.scss";

const Widgets = ({ menuSidebar, handleMenuSidebar, setZoomDelta }) => {
  const [searchPrompt, setSearchPrompt] = useState(false);
  const [underSearchBar, setUnderSearchBar] = useState(false);

  return (
    <>
      <div className="bottom-right-widgets">
        <VerticalWidget
          className="vertical-widget"
          setZoomDelta={setZoomDelta}
        />
        <HorizontalWidget className="horizontal-widget" />
      </div>
      <div className="bottom-left-widgets">
        <MinimapWidget />
      </div>
      <div className="top-left-widgets">
        <SearchBar
          menuSidebar={menuSidebar}
          handleMenuSidebar={handleMenuSidebar}
          searchPrompt={searchPrompt}
          setSearchPrompt={setSearchPrompt}
          underSearchBar={underSearchBar}
        />
        <UnderSearchBar
          searchPrompt={searchPrompt}
          setSearchPrompt={setSearchPrompt}
          underSearchBar={underSearchBar}
          setUnderSearchBar={setUnderSearchBar}
        />
      </div>
      <div className="top-right-widgets">
        <UserWidget />
      </div>
    </>
  );
};

export default Widgets;
