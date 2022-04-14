import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from 'three';

import { useFrame, useThree } from "@react-three/fiber";

import { useStore } from "../../../hooks/useStand";

import GeometriesSwitch from "../Geometries/GeometriesSwtch";

import vertex from './Archive/1/vertex.glsl';

function ShadeGeo({ fragment, position, scale }) {
  const mesh =useStore((state) => state.mesh);

  const [loading, setLoading] = useState();
  
  const { viewport } = useThree();

  const shadeMaterial = useRef();
  const ref = useRef();


  useEffect(() => {
    shadeMaterial.current.resolution = (viewport.height, viewport.width)
    shadeMaterial.current && mesh.geometry.shape ? setLoading(false) : null;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    shadeMaterial.current.uniforms.uTime.value = t
    shadeMaterial.current.time += delta
    shadeMaterial.current.uniforms.uMouse.value = state.mouse
  });

  return (
    <>
      <Suspense fallback={null}>
        <mesh
          ref={ref}
          position={position}
          scale={scale}
        >
          <GeometriesSwitch shape={mesh.geometry.shape} />
          <shaderMaterial 
            ref={shadeMaterial} 
            vertexShader={vertex}   
            fragmentShader={fragment}
            blending={THREE.AdditiveBlending}
            uniforms={{
              uTime: { value: 1.0 }, 
              uResolution: { value: new THREE.Vector2() }, 
              uMouse: { value: new THREE.Vector2() },
              uColor: {value: 'blue'},
            }}  
          />
        </mesh>
      </Suspense> 
    </>
  );
};

export default ShadeGeo;
