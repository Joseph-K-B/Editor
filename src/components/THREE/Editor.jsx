import {useEffect, useReducer, useRef, useState } from 'react';

import { Html, OrbitControls } from "@react-three/drei";

import Terrain from "./Staging/Terrain";

import { Suspense } from "react";

import { useStore } from "../../hooks/useStand";

import useGeometry from './threeHooks/useGeometry';



function Editor(action) {
  const [loading, setLoading] = useState(true);
  const shaders = useStore((state) => state.shaders);
  const mesh = useStore((state) => state.mesh);
  const grid = useStore((state) => state.grid);
  const [geometry, dispatch] = useReducer();

  // useEffect(() => {    
  //   if(mesh.geometry.shape.includes(mesh.geometry.shape)) {
  //     console.log(mesh.geometry.shape)
  //   } else setLoading(false);     
  // }, [mesh]);


  switch ( action.type ) {
    case mesh.geometry.shape === 'plane' : {
      return <planeBufferGeometry />
    }
    default: {
      return (
        <mesh>
        <boxBufferGeometry />
        <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
  }
  // return(
    //   <>
  //     {/* <Lights /> */}
    // <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
  //     <OrbitControls makeDefault />
  //     {grid ? <Terrain /> : null}
  //     <mesh>
        {
          
          // mesh.geometry.shape === 'plane' ? 
          //   <planeBufferGeometry /> :
          // mesh.geometry.shape === 'cube' ?
          //   <boxBufferGeometry /> :
          // mesh.geometry.shape === 'sphere' ?
          //   <sphereBufferGeometry /> :
          // mesh.geometry.shape === 'cone' ?
          //   <coneBufferGeometry /> :
          // mesh.geometry.shape === 'column' ?
          //   <cylinderBufferGeometry /> :
          // mesh.geometry.shape === 'torus' ?
          //   <torusBufferGeometry /> :
          // mesh.geometry.shape === 'torusKnot' ?
          //   <torusKnotGeometry
          //     radius={3} 
          //     tube={4}
          //     radialSegments={10}            
          //     p={2}
          //     q={5}
          //   /> :
          // mesh.geometry.shape === 'tetrahedron' ?
          //   <tetrahedronBufferGeometry /> :
          // null
      }
  //       <meshBasicMaterial color={mesh.material.color} />
  //     </mesh>


  //   </Suspense>
  //   </>
  // );
};

export default Editor;