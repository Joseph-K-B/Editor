import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import vertex from './Archive/1/vertex.glsl';

import { useFrame, useThree } from "@react-three/fiber";


import './ShadeMaterial';
import { useStore } from "../../../hooks/useStand";

function ShadeGeo({ fragment, l, w, gallery, position, scale }) {
  const darkMode = useStore((state) => state.darkMode);
  const mesh =useStore((state) => state.mesh);

  const [loading, setLoading] = useState();
  
  const { viewport } = useThree();


  const shadeMaterial = useRef();
  const ref = useRef();


  useEffect(() => {
    shadeMaterial.current.resolution = [viewport.height, viewport.width]
    shadeMaterial.current ? setLoading(false) : null;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    // if(gallery || darkMode) {
      shadeMaterial.current.uniforms.uTime.value = t
      shadeMaterial.current.uniforms.uMouse.value = state.mouse
    // } else 
    // shadeMaterial.current.time = t;
    // shadeMaterial.current.mouse = state.mouse;
  });

  return (
    <>
    {/* { gallery ?  */}
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
        {
          mesh.geometry.shape === 'plane' ? 
            <planeBufferGeometry args={[l, w, 10]}/> :
          mesh.geometry.shape === 'cube' ? 
            <boxBufferGeometry args={[2.5, 2.5, 2.5, 30, 30, 30]} /> :
          mesh.geometry.shape === 'sphere' ? 
            <sphereBufferGeometry /> :
          <torusBufferGeometry />
        }
        <shaderMaterial 
          ref={shadeMaterial} 
          vertexShader={vertex}   
          fragmentShader={fragment}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uTime: {value: 1.0}, 
            // uResolution: new THREE.Vector2(), 
            uMouse: {value: new THREE.Vector2()}
          }}  
          /> 
        </mesh>
        {/* : <mesh
            ref={ref}
          >
            <planeBufferGeometry args={[5, 5]}/>
            <boxBufferGeometry args={[5, 5, 5, 30, 30, 30]} />
            <sphereBufferGeometry />
            <shadeMaterial              
              ref={shadeMaterial}
              blending={THREE.AdditiveBlending}
              wireframe
            />
          </mesh>
        } */}
    </>
  );
};

export default ShadeGeo;
