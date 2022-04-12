import { useEffect } from "react";

import { useStore } from "../hooks/useStand";

import Drawer from "../components/HTML/Drawer";
import ThreeCanvas from "../components/THREE/ThreeCanvas";
import Nav from "../components/HTML/Nav";
// import HandFlow from "../components/HTML/HandFlow";


function Main() {
  const selection = useStore((state) => state.selection);



  return (
    <>
      <Drawer />
      <Nav />
      {/* <HandFlow /> */}
      <ThreeCanvas />
    </>
  );
};

export default Main;