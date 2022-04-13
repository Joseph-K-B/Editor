import ThreeCanvas from "../components/THREE/ThreeCanvas";

import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/EditorControls/ControlsDrawer/ControlsDrawer";

import useResize from "../hooks/useResize";
import GeoInventory from "../components/HTML/ObjectInventories/GeoInventory";


function Main() {
  useResize();

  return (
    <>
      <ThreeCanvas />
      <ControlsDrawer />
      <GeoInventory />
      <Drawer />
      <Nav />
    </>
  );
};

export default Main;