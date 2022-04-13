import ThreeCanvas from "../components/THREE/ThreeCanvas";

import Nav from "../components/HTML/Nav/Nav";
import Drawer from "../components/HTML/Drawer/Drawer";
import ControlsDrawer from "../components/HTML/ControlsDrawer/ControlsDrawer";

import useResize from "../hooks/useResize";


function Main() {
  useResize();

  return (
    <>
      <Drawer />
      <ControlsDrawer />
      <Nav />
      <ThreeCanvas />
    </>
  );
};

export default Main;