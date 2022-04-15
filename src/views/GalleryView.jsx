import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/EditorControls/ControlsDrawer/ControlsDrawer";

import GeoInventory from "../components/HTML/ObjectInventories/GeoInventory";
import GalleryCanvas from "../components/THREE/Canvases/ParticleCanvas";

import useResize from "../hooks/useResize";

import '../app.css';


function GalleryView() {
  useResize();

  return (
    <>
      <GalleryCanvas />
      <ControlsDrawer />
      <GeoInventory />
      <Drawer />
      <Nav />
    </>
  );
};

export default GalleryView;