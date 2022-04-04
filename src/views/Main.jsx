import { useEffect } from "react";
import Drawer from "../components/HTML/Drawer";
import Flow from "../components/HTML/Flow";
import ThreeCanvas from "../components/THREE/ThreeCanvas";
import { useStore } from "../hooks/useStand";


function Main() {
  const selection = useStore((state) => state.selection);



  return (
    <>
      <Drawer />
      <Flow />
      {/* <ThreeCanvas />*/}
    </>
  );
};

export default Main;