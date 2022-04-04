import { useEffect } from "react";

import { useStore } from "../hooks/useStand";

import Drawer from "../components/HTML/Drawer";
import ThreeCanvas from "../components/THREE/ThreeCanvas";
// import HandFlow from "../components/HTML/HandFlow";
// import HandFlowDos from "../components/HTML/HandFlowDos";


function Main() {
  const selection = useStore((state) => state.selection);



  return (
    <>
      <Drawer />
      {/* <HandFlow /> */}
      {/* <HandFlowDos /> */}
      <ThreeCanvas />
    </>
  );
};

export default Main;