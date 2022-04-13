import {useRef } from 'react';

import { Html, OrbitControls } from "@react-three/drei";

import Terrain from "./Staging/Terrain";

import { Suspense } from "react";

import { useStore } from "../../hooks/useStand";



function Editor() {
  const shaders = useStore((state) => state.shaders);
  const mesh = useStore((state) => state.mesh);
  const grid = useStore((state) => state.grid);


  return(
    <>
    <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      {/* <Lights /> */}
      <OrbitControls makeDefault />
      {grid ? <Terrain /> : null}
      <mesh>
        {
          mesh.geometry.shape === 'plane' ? 
            <planeBufferGeometry /> :
          mesh.geometry.shape === 'cube' ?
            <boxBufferGeometry /> :
          mesh.geometry.shape === 'sphere' ?
            <sphereBufferGeometry /> :
          mesh.geometry.shape === 'cone' ?
            <coneBufferGeometry /> :
          mesh.geometry.shape === 'column' ?
            <cylinderBufferGeometry /> :
          mesh.geometry.shape === 'torus' ?
            <torusBufferGeometry /> :
          mesh.geometry.shape === 'torusKnot' ?
            <torusKnotGeometry
              radius={3} 
              tube={4}
              radialSegments={10}            
              p={2}
              q={5}
            /> :
          mesh.geometry.shape === 'tetrahedron' ?
            <tetrahedronBufferGeometry /> :
          null
      }
        <meshBasicMaterial color={mesh.material.color} />
      </mesh>


    </Suspense>
    </>
  );
};

export default Editor;