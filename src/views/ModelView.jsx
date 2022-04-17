import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/EditorControls/ControlsDrawer/ControlsDrawer";

import GeoInventory from "../components/HTML/ObjectInventories/GeoInventory";
import ModelCanvas from "../components/THREE/Canvases/ModelCanvas";

import useResize from "../hooks/useResize";

import '../app.css';


function ModelView() {
  useResize();

  return (
    <>
      <ModelCanvas />
      <ControlsDrawer />
      <GeoInventory />
      <Drawer />
      <Nav />
    </>
  );
};

export default ModelView;