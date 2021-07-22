import HorizontalWidget from "./horizontalWidget/HorizontalWidget";
import MinimapWidget from "./minimapWidget/MinimapWidget";
import SearchBar from "./searchBar/SearchBar";
import UserWidget from "./userWidget/UserWidget";
import VerticalWidget from "./verticalWidget/VerticalWidget";
import "./_widgets.scss";

const Widgets = ({ menuSidebar, handleMenuSidebar }) => {
  return (
    <>
      <div className="bottom-right-widgets">
        <VerticalWidget className="vertical-widget" />
        <HorizontalWidget className="horizontal-widget" />
      </div>
      <div className="bottom-left-widgets">
        <MinimapWidget />
      </div>
      <div className="top-left-widgets">
        <SearchBar
          menuSidebar={menuSidebar}
          handleMenuSidebar={handleMenuSidebar}
        />
      </div>
      <div className="top-right-widgets">
        <UserWidget />
      </div>
    </>
  );
};

export default Widgets;
