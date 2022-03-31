import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import vertex from './Archive/1/vertex.glsl';

import { useFrame } from "@react-three/fiber";


// import './ShadeMaterial';
import { useStore } from "../../../hooks/useStand";

function ShadeGeo({fragment, l, w}) {
  const shaders = useStore((state) => state.shaders)
  const shadeMaterial = useRef();
  const ref = useRef();
  const [loading, setLoading] = useState();


  useEffect(() => {
    // shadeMaterial.current.fragmentShader = fragmentShader
    shadeMaterial.current ? setLoading(false) : null;
  }, []);

  useFrame((state, delta) => {
    shadeMaterial.current.time += delta;
    shadeMaterial.current.mouse = state.mouse;
  });

  console.log(shaders);

  return (
    <>
      <mesh
        ref={ref}
        onClick={console.log(shadeMaterial)}
      >
        <planeBufferGeometry args={[l, w, 20, 20]} />
        {/* <boxBufferGeometry args={[3, 3, 3]} /> */}
        {/* <shadeMaterial
          ref={shadeMaterial}
          blending={THREE.AdditiveBlending}
          fragmentShader={fragment}
          wireframe
        /> */}
        <shaderMaterial 
          ref={shadeMaterial} 
          vertexShader={vertex}   
          fragmentShader={fragment}
          uniforms={{
            uTime: 1, 
            // uResolution: new THREE.Vector2(), 
            uMouse: new THREE.Vector2()
          }}  
        />
      </mesh>
    </>
  );
};

export default ShadeGeo;
