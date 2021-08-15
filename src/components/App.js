import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Map from "./map/Map";
import MenuSidebar from "./sidebars/MenuSidebar";
import Widgets from "./widgets/Widgets";
import WidgetsContainer from "./widgets/WidgetsContainer";
import theme from "../theme";

function App() {
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [zoomDelta, setZoomDelta] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Map zoomDelta={zoomDelta} setZoomDelta={setZoomDelta} />
        <WidgetsContainer />
        <MenuSidebar
          menuSidebar={menuSidebar}
          setMenuSidebar={setMenuSidebar}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
