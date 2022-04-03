import React, { useEffect, useRef } from "react";
import * as THREE from 'three';

import { extend, useFrame } from "@react-three/fiber";
import Perlin from 'perlin.js';
import WindLayer from '../THREE/Shaders/WindLayer';
import { Depth, LayerMaterial } from "lamina";

Perlin.seed(Math.random())
extend({ WindLayer })


function Grass({ children, strands = 60000, ...props }) {
  const meshRef = useRef(null);
  const windLayer = useRef(null);
  const geometryRef = useRef();
  
  useEffect(() => {
    meshRef.current.geometry.applyMatrix4( new THREE.Matrix4().makeRotationX(Math.PI / 2));
    meshRef.current.geometry.applyMatrix4( new THREE.Matrix4().makeTranslation(0, 0, 0.5));
  }, []);

  useFrame(() => (
    windLayer.current.time += 0.005
  ));

  return(
    <>
    {React.cloneElement(children, { ref: geometryRef })}
    <instancedMesh ref={meshRef} args={[undefined, undefined, strands]} {...props}>
    <coneGeometry args={[0.05, 1.0, 2.0, 20, false, 0, Math.PI ]} />
    <LayerMaterial side={THREE.DoubleSide} lighting='physical' envMapIntensity={1}>
      <Depth colorA='#221600' colorB='#ade266' near={0.14} far={1.52} mapping={'world'} />
      <windLayer
        ref={windLayer}
        args={[{ mode: 'multiply '}]}
        colorA={'#ffffff'}
        colorB={'#acf5ce'}
        noiseScale={10}
        noiseStrength={5}
        length={1.2}
        sway={0.5}
      />
    </LayerMaterial>
    </instancedMesh>
    </>
  );
};

export default Grass;