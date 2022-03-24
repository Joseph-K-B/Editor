import Drawer from "../components/HTML/Drawer";
import ThreeCanvas from "../components/THREE/ThreeCanvas";
import { useStore } from "../hooks/useStand";


function Main() {
  const selection = useStore((state) => state.selection);


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
        {selection === [{}] ? 
        <h1>r:{selection[0].material.color.r}</h1> :
        <h1>Pick a mesh</h1>}
      </div>
      <Drawer />
      <ThreeCanvas />
    </>
  );
};

export default Main;