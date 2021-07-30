import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Map from "./components/map/Map";
import MenuSidebar from "./components/sidebars/menuSidebar/MenuSidebar";
import Widgets from "./components/widgets/Widgets";
import theme from "./theme";

function App() {
  const [menuSidebar, toggleMenuSidebar] = useState(false);
  const handleMenuSidebar = () => toggleMenuSidebar((value) => !value);
  const [zoomDelta, setZoomDelta] = useState(0);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
