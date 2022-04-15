import GalleryCanvas from "../components/THREE/GalleryCanvas";

import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/EditorControls/ControlsDrawer/ControlsDrawer";

import useResize from "../hooks/useResize";
import GeoInventory from "../components/HTML/ObjectInventories/GeoInventory";


function Gallery() {
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

export default Gallery;