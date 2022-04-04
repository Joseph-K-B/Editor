import Drawer from "../components/HTML/Drawer";
import ThreeCanvas from "../components/THREE/ThreeCanvas";
import { useStore } from "../hooks/useStand";


function Main() {
  const selection = useStore((state) => state.selection);


  return (
    <>
      {/* <Drawer /> */}
      <ThreeCanvas />      
    </>
  );
};

export default Main;