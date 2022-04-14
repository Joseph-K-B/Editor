import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from 'three';

import { useFrame, useThree } from "@react-three/fiber";


import { useStore } from "../../../hooks/useStand";
import GeometriesSwitch from "../Geometries/GeometriesSwtch";
import vertex from './Archive/20/vertex.glsl';
import './ShadeMaterial';
import { useRandomAttribute } from "../threeHooks/useRandomAttribute";

function ShadeGeo({ fragment, l, w, position, scale }) {
  const darkMode = useStore((state) => state.darkMode);
  const mesh =useStore((state) => state.mesh);

  const [loading, setLoading] = useState();
  
  const { viewport } = useThree();

  const shadeMaterial = useRef();
  const geoRef = useRandomAttribute();
  const ref = useRef();

  const randomFactors = [1, 1, 1];


  useEffect(() => {

    shadeMaterial.current.resolution = [viewport.height, viewport.width]
    shadeMaterial.current && mesh.geometry.shape ? setLoading(false) : null;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    shadeMaterial.current.uniforms.uTime.value = t
    shadeMaterial.current.uniforms.uMouse.value = state.mouse
  });

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
      <Suspense fallback={null}>
        {/* <GeometriesSwitch shape={mesh.geometry.shape} ref ={geoRef}/> */}
        <planeBufferGeometry args={[2, 2, 512, 512]} side={THREE.DoubleSide}/>
        <shaderMaterial 
          ref={shadeMaterial} 
          vertex={vertex}   
          fragmentShader={fragment}
          blending={THREE.AdditiveBlending}
          randomFactors={randomFactors} 
          uniforms={{
            uTime: { value: 1.0 }, 
            uResolution: { value: new THREE.Vector2() }, 
            uMouse: { value: new THREE.Vector2() },
            uColor: {value: 'blue'},
                      
            uBigWaveElevation: {value: 0.2},
            uBigWaveFrequency: {value: new THREE.Vector2(4, 1.5)},
            uBigWaveSpeed: {value: 0.75},
            
            uSmallWavesElevation: { value: 0.15 },
            uSmallWavesFrequency: { value: 3.0 },
            uSmallWavesSpeed: { value: 0.2 },
            uSmallWavesIterations: { value: 4.0 },

            uDepthColor: {value: new THREE.Color('blue')},
            uSurfaceColor: {value: new THREE.Color('aqua')},
            uColorOffset: { value: 0.08 },
            uColorMultiplier: { value: 5.0 },
          }}  
        />
        </Suspense> 
      </mesh>
    </>
  );
};

export default ShadeGeo;
