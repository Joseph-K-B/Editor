import {useRef } from 'react';

import { Box, Html, OrbitControls, Plane, Sphere } from "@react-three/drei";
import Lights from "./Staging/Lights";
import Terrain from "./Staging/Terrain";
import Particles from "./Shaders/Particles";
import { Suspense } from "react";
import Grass from "../SAND/Grass";
import GrassParticles from "./Shaders/GrassParticles";
import ShadeGeo from "./Shaders/ShadeGeo";
import { useStore } from "../../hooks/useStand";



function Editor() {
  const shaders = useStore((state) => state.shaders);
  const geometry = useStore((state) => state.geometry);
  const grid = useStore((state) => state.grid);

  const mesh = useRef(); 

  return(
    <>
    <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      {/* <Lights /> */}
      <OrbitControls makeDefault />
      {grid ? <Terrain /> : null}
      <mesh
        ref={mesh}
      >
        {geometry.shape === 'plane' ? 
          <planeBufferGeometry /> :
        geometry.shape === 'cube' ?
          <boxBufferGeometry /> :
        geometry.shape === 'sphere' ?
          <sphereBufferGeometry /> :
        geometry.shape === 'cone' ?
          <coneBufferGeometry /> :
        geometry.shape === 'column' ?
          <cylinderBufferGeometry /> :
        geometry.shape === 'torus' ?
          <torusBufferGeometry /> :
        geometry.shape === 'torusKnot' ?
          <torusKnotGeometry
            radius={3} 
            tube={4}
            radialSegments={10}            
            p={2}
            q={5}
          /> :
        geometry.shape === 'tetrahedron' ?
          <tetrahedronBufferGeometry /> :
        null
      }
        <meshBasicMaterial color={geometry.color} />
      </mesh>

      {/* GEOMETRY SHADER  */}
      {/* <ShadeGeo fragment={shaders[12].fragmentShader}/> */}
      
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