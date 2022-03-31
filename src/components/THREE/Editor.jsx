import { OrbitControls } from "@react-three/drei";
import Lights from "./Staging/Lights";
import Terrain from "./Staging/Terrain";
import DreiSelect from '../SAND/dreiSelect';


function Editor() {

  return(
    <>
      <Lights />
      <OrbitControls />
      <Terrain />
      <DreiSelect />
    </>
  );
};

export default Editor;