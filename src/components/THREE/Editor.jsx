import { Box, Html, OrbitControls } from "@react-three/drei";
import Lights from "./Staging/Lights";
import Terrain from "./Staging/Terrain";
import DreiSelect from '../SAND/dreiSelect';
import Particles from "./Shaders/Particles";
import { Suspense } from "react";


function Editor() {

  return(
    <>
    <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      {/* <Lights /> */}
      <OrbitControls makeDefault/>
      {/* <Terrain />
      <DreiSelect /> */}
      <Particles />
    </Suspense>
    </>
  );
};

export default Editor;