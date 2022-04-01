import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useStore } from "../../../hooks/useStand";
import { Point, Points, Sphere } from "@react-three/drei";

function Particles() {
  // State 
  const particleState = useStore((state) => state.particles);

  // Refs
  const particlesRef = useRef();
  const particlesMat = useRef();
  const particlesGeo = useRef();
  // const insideColorRef = useRef(particleState.insideColor);
  // const outsideColorRef = useRef(particleState.outsideColor);

  //Local Variables
  const positionsArray = new Float32Array(particleState.count * 3);
  const colorsArray = new Float32Array(particleState.count * 3);
  // const colorInside = new THREE.Color(particleState.insideColor);
  // const colorOutside = new THREE.Color(particleState.outsideColor);

  const texture = useLoader(THREE.TextureLoader, '/particles/1.png');

  
    
    
  //   useEffect(() => {
  //     console.log(colorInside)
  //     insideColorRef.current.set(colorInside);
  //     outsideColorRef.current.set(colorOutside);
  // }, [])

  //Tick
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const step = 0.5;
  })

  return(
    <Points ref={particlesRef} limit={10000}>
    {Array.from({ length: particleState.count}).map((_, i) => {
    const rad = Math.random() * particleState.radius;
    const spinAngle = rad * particleState.spin;
    const branchAngle = (( i % particleState.branches) / particleState.branches) * Math.PI * 2;

    const randomX = 
      Math.pow(Math.random(), particleState.randomPower) 
      * (Math.random() > 0.5 ? 1 : -1) 
      * particleState.randomness * rad;
    const randomY = 
      Math.pow(Math.random(), particleState.randomPower) 
      * (Math.random() > 0.5 ? 1 : -1) 
      * particleState.randomness * rad;
    const randomZ = 
      Math.pow(Math.random(), particleState.randomPower) 
      * (Math.random() > 0.5 ? 1 : -1) 
      * particleState.randomness * rad;

      const position = [
        Math.cos(branchAngle) * rad + randomX,
        randomY,
        Math.sin(branchAngle) * rad + randomZ
      ];

      const color = new THREE.Color(particleState.insideColor).lerp(
        new THREE.Color(particleState.outsideColor),
        rad / particleState.radius
      );

      const scale = Math.random();
    return  <Point key={i} position={position} color={color} size={scale} />
  })}
  <pointsMaterial
    depthWrite={false}
    blending={THREE.AdditiveBlending}
    vertexColors
  />
  </Points>
  );
};

export default Particles;