import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";

    
    
import './OceanMaterial'    
    
function OceanGeo({ gallery }) {
  const oceanMaterial = useRef();

  const props = {
    bigWavesElevation: 0.2, 
    bigWavesFrequency :(4.0, 1.5),
    bigWavesSpeed: 0.75,
    smallWavesElevation: 0.15,
    smallWavesFrequency: 3.0,
    smallWavesSpeed: 0.2,
    smallWavesIterations: 4.0,
    depthColor: '#c90a30b5',
    surfaceColor: '#19cfcf',
    uColorOffset: 0.08,
    uColorMultiplier : 5.0,
  }

  useFrame((state, delta) => {
    oceanMaterial.current.time += delta
  })

  return(

    <mesh
    rotation={[-Math.PI / 2, 0, 0]}
    >
      <oceanMaterial 
        ref={oceanMaterial}
        blending={THREE.AdditiveBlending}

        bigWavesElevation = {props.bigWavesElevation}
        bigWavesFrequency = {props.bigWavesFrequency}
        bigWavesSpeed = {props.bigWavesSpeed}

        smallWavesElevation = {props.smallWavesElevation}
        smallWavesFrequency = {props.smallWavesFrequency}
        smallWavesSpeed = {props.smallWavesSpeed}
        smallWavesIterations = {props.smallWavesIterations}

        depthColor = {props.depthColor}
        surfaceColor =  {props.surfaceColor}
        colorOffset = {props.uColorOffset}
        colorMultiplier= {props.uColorMultiplier}    
      />
      {gallery ?
      <boxBufferGeometry args={[1, 1, 1, 512, 512, 512]}/>
      :
      <planeBufferGeometry args={[4, 4, 512, 512]}/>}
    </mesh>
  );
};

export default OceanGeo;
    
    