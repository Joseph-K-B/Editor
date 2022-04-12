import { Html, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ShadeGeo from "./Shaders/ShadeGeo";


function Landing(){
  
  return (
    <>
    <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      <OrbitControls />
      {/* GEOMETRY SHADER  */}
      <ShadeGeo />
      <group position={[0, 5.5, 0]}>
        <ShadeGeo />
      </group>
      <group position={[5.5, 5.5, 0]}>
        <ShadeGeo />
      </group>
      <group position={[5.5, 0, 0]}>
        <ShadeGeo />
      </group>
      <group position={[-5.5, 0, 0]}>
        <ShadeGeo />
      </group>
      <group position={[0, -5.5, 0]}>
        <ShadeGeo />
      </group>
      <group position={[5.5, -5.5, 0]}>
        <ShadeGeo />
      </group>
      <group position={[-5.5, -5.5, 0]}>
        <ShadeGeo />
      </group>
    </Suspense>
    </>
  );
};

export default Landing;