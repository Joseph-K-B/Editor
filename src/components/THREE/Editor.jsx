import { Box, Html, OrbitControls, Plane, Sphere } from "@react-three/drei";
import Lights from "./Staging/Lights";
import Terrain from "./Staging/Terrain";
import DreiSelect from '../SAND/dreiSelect';
import Particles from "./Shaders/Particles";
import { Suspense } from "react";
import Grass from "../SAND/Grass";
import GrassParticles from "./Shaders/GrassParticles";
import ShadeGeo from "./Shaders/ShadeGeo";



function Editor() {

  return(
    <>
    <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      {/* <Lights /> */}
      <OrbitControls makeDefault/>
      {/* <Terrain /> */}

      {/* GEOMETRY SHADER  */}
      <ShadeGeo />
      
      {/* GALAXY SHADER */}
      {/* <Particles /> */}


      {/* GRASS SHADER  */}
      {/* <Grass>
        <Sphere position={[0, 0.001, 0]} scale={0.25}>
          <meshBasicMaterial color='purple' wireframe/>
        </Sphere>
      </Grass>
        <Sphere args={[0.5, 8, 8]} position={[0, 0.001, 0]}>
          <meshBasicMaterial color='white' wireframe/>
        </Sphere>
      <GrassParticles /> */}
    </Suspense>
    </>
  );
};

export default Editor;