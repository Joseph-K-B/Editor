import { Float, Html, OrbitControls, Plane } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useStore } from "../../hooks/useStand";
import ShadeGeo from "./Shaders/ShadeGeo";
import Terrain from "./Staging/Terrain";


function Landing(){
  const shaders = useStore((state) => state.shaders)
  const grid = useStore((state) => state.grid);
  
  return (
    <>
    <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      { grid ? <Terrain /> : null }
      <OrbitControls makeDefault/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
          <ShadeGeo fragment={shaders[12].fragmentShader}/>
    </Suspense>
    </>
  );
};

export default Landing;