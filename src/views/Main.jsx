import Drawer from "../components/HTML/Drawer";
import ThreeCanvas from "../components/THREE/ThreeCanvas";
import { useStore } from "../hooks/useStand";


function Main() {
  

  return (
    <>
    <div 
        style={{
          position: "absolute", 
          top: '10%', 
          left: '10%', 
          color: 'white', 
          zIndex: 9}}
      >
        <h1>selected:</h1>
      </div>
      <Drawer />
      <ThreeCanvas />
    </>
  );
};

export default Main;