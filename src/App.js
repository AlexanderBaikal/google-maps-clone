import { useState } from "react";
import "./App.css";
import Map from "./components/map/Map";
import MenuSidebar from "./components/sidebars/menuSidebar/MenuSidebar";
import Widgets from "./components/widgets/Widgets";

function App() {
  const [menuSidebar, toggleMenuSidebar] = useState(false);
  const handleMenuSidebar = () => toggleMenuSidebar((value) => !value);
  const [zoomDelta, setZoomDelta] = useState(0);

  return (
    <div className="App">
      <Map zoomDelta={zoomDelta} setZoomDelta={setZoomDelta} />
      <Widgets
        setZoomDelta={setZoomDelta}
        menuSidebar={menuSidebar}
        handleMenuSidebar={handleMenuSidebar}
      />
      <MenuSidebar
        menuSidebar={menuSidebar}
        handleMenuSidebar={handleMenuSidebar}
      />
    </div>
  );
}

export default App;
