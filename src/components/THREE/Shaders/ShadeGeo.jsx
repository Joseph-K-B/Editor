import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import vertex from './Archive/1/vertex.glsl';

import { useFrame, useThree } from "@react-three/fiber";


import './ShadeMaterial';
import { useStore } from "../../../hooks/useStand";

function ShadeGeo({fragment, l, w, gallery}) {
  const { viewport } = useThree();
  const shadeMaterial = useRef();
  const ref = useRef();
  const [loading, setLoading] = useState();


  useEffect(() => {
    shadeMaterial.current.resolution = [viewport.height, viewport.width]
    shadeMaterial.current ? setLoading(false) : null;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    if(gallery) {
      shadeMaterial.current.uniforms.uTime = t
      // shadeMaterial.current.uniforms.uMouse = state.mouse
    } else 
    shadeMaterial.current.time = t;
    shadeMaterial.current.mouse = state.mouse;
  });

  return (
    <>
    { gallery ? 
      <mesh
        ref={ref}
      >
        <planeBufferGeometry args ={[l, w, 10]}/>
        <shaderMaterial 
          ref={shadeMaterial} 
          vertexShader={vertex}   
          fragmentShader={fragment}
          uniforms={{
            uTime: 1.0, 
            // uResolution: new THREE.Vector2(), 
            // uMouse: new THREE.Vector2()
          }}  
          /> 
        </mesh>
        : <mesh
            ref={ref}
            onClick={console.log(shadeMaterial)}
          >
            {/* <planeBufferGeometry args={[5, 5]}/> */}
            <boxBufferGeometry args={[5, 5, 5, 30, 30, 30]} />
            {/* <sphereBufferGeometry /> */}
            <shadeMaterial              
              ref={shadeMaterial}
              blending={THREE.AdditiveBlending}
              // wireframe
            />
          </mesh>
        }
    </>
  );
};

export default ShadeGeo;
