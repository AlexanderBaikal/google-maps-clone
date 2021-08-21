import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import WidgetsContainer from "./widgets/WidgetsContainer";
import theme from "../theme";
import MenuSidebarContainer from "./sidebars/sideMenu/MenuSidebarContainer";
import MapContainer from "./map/MapContainer";
import ReviewModal from "./modals/ReviewModal";

function App({}) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ReviewModal />
        <MapContainer />
        <WidgetsContainer />
        <MenuSidebarContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
