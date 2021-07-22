import { useState } from "react";
import "./App.css";
import Map from "./components/map/Map";
import MenuSidebar from "./components/sidebars/menuSidebar/MenuSidebar";
import Widgets from "./components/widgets/Widgets";

function App() {
  const [menuSidebar, toggleMenuSidebar] = useState(false);
  const handleMenuSidebar = () => toggleMenuSidebar((value) => !value);

  return (
    <div className="App">
      <Map />
      <Widgets menuSidebar={menuSidebar} handleMenuSidebar={handleMenuSidebar} />
      <MenuSidebar menuSidebar={menuSidebar} handleMenuSidebar={handleMenuSidebar} />
    </div>
  );
}

export default App;
