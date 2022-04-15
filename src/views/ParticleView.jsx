import ParticleCanvas from "../components/THREE/Canvases/ParticleCanvas";

import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/EditorControls/ControlsDrawer/ControlsDrawer";

import GeoInventory from "../components/HTML/ObjectInventories/GeoInventory";
import useResize from "../hooks/useResize";

import '../app.css';

function ParticleView() {
  useResize();

  return (
    <>
      <ParticleCanvas />
      <ControlsDrawer />
      <GeoInventory />
      <Drawer />
      <Nav />
    </>
  );
};

export default ParticleView;