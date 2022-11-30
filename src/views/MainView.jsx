import ThreeCanvas from "../components/THREE/Canvases/ThreeCanvas";
import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/EditorControls/ControlsDrawer/ControlsDrawer";
import AudioCanvas from "../components/THREE/Canvases/AudioCanvas";
import GeoInventory from "../components/HTML/ObjectInventories/GeoInventory";

import useResize from "../hooks/useResize";

import '../app.css';

function Main() {
  useResize();

  return (
    <>
      <Drawer />
      <ControlsDrawer />
      {/* <ThreeCanvas /> */}
      <AudioCanvas />
      <GeoInventory />
      <Nav />
    </>
  );
};

export default Main;