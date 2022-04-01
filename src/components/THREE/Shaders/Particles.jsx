import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useStore } from "../../../hooks/useStand";

function Particles() {
  // State 
  const particleState = useStore((state) => state.particles);

  // Refs
  const particlesRef = useRef();
  const particlesMat = useRef();
  const particlesGeo = useRef();

  //Local Variables
  const positionsArray = new Float32Array(particleState.count * 3);
  const colorsArray = new Float32Array(particleState.count * 3);
  const colorInside = new THREE.Color(particleState.insideColor);
  const colorOutside = new THREE.Color(particleState.outsideColor);

  const texture = useLoader(THREE.TextureLoader, '/particles/1.png');


  //Positions & Colors
  for(let i = 0; i < particleState.count * 3; i++) {

    const i3 = i*3;

    const rad = Math.random() * particleState.radius;
    const spinAngle = rad * particleState.spin;
    const branchAngle = ( i % particleState.branches) / particleState.branches * Math.PI * 2;

    const randomX = 
      Math.pow(Math.random(), particleState.randomPower) 
      * (Math.random() < 0.5 ? 1 : -1) 
      * particleState.randomness * rad;
    const randomY = 
      Math.pow(Math.random(), particleState.randomPower) 
      * (Math.random() < 0.5 ? 1 : -1) 
      * particleState.randomness * rad;
    const randomZ = 
      Math.pow(Math.random(), particleState.randomPower) 
      * (Math.random() < 0.5 ? 1 : -1) 
      * particleState.randomness * rad;

      positionsArray[i3   ] = Math.cos(branchAngle + spinAngle) * rad + randomX;
      positionsArray[i3 + 1] = randomY;
      positionsArray[i3 +  2] = Math.sin(branchAngle + spinAngle) * rad + randomZ;


      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, rad / particleState.radius);

      colorsArray[i3   ] = mixedColor.r;
      colorsArray[i3 + 1] = mixedColor.g;
      colorsArray[i3 + 2] = mixedColor.b;
  }


  //Tick
  useEffect(() => {
    console.log(particleState);

    /*
    This should probably be handled in parent component
    if(particlesRef.current !== null) {
      particlesGeo.current.dispose()
      particlesMat.current.dispose()
      scene.remove(particlesRef.current)
    }
    */
  }, []);


  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const step = 0.5;
  })

  return(
    <>
      <points
        ref={particlesRef}
      >
        <pointsMaterial
          ref={particlesMat} 
          size={particleState.size} 
          sizeAttenuation
          // alphaMap={texture}
          // alphaTest={0.001}
          depthWrite= {false}
          blending={THREE.AdditiveBlending}
          vertexColors
          // transparent
        />
        {/* <sphereBufferGeometry args={[1, 32, 32]}/> */}
        {/* <boxBufferGeometry args={[1, 1, 1, 10, 10, 10, 10]}/> */}
        {/* <planeGeometry args={[1, 1, 1, 10]}/> */}
        <bufferGeometry
          ref={particlesGeo}
        >
          <bufferAttribute 
            attachObject={['attributes', 'position']} 
            count={particleState.count}
            array={positionsArray}
            itemSize={3} 
          />
          <bufferAttribute 
            attachObject={['attributes', 'color']} 
            count={particleState.count}
            array={colorsArray}
            itemSize={3} 
          />
          {/* <bufferAttribute 
            attachObject={['attributes', 'aScale']} 
            count={count}
            array={scaleArray}
            itemSize={1} 
          /> */}
        </bufferGeometry>
      </points>
    </>
  );
};

export default Particles;