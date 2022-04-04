import { useEffect } from "react";
import Drawer from "../components/HTML/Drawer";

import ThreeCanvas from "../components/THREE/ThreeCanvas";
import { useStore } from "../hooks/useStand";
import HandFlow from "../components/HTML/HandFlow";


function Main() {
  const selection = useStore((state) => state.selection);



  return (
    <>
      <Drawer />
      <HandFlow />
      {/* <ThreeCanvas />*/}
    </>
  );
};

export default Main;