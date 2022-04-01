import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

function Particles() {
  const particles = useRef();
  const particlesGeo = useRef();

  const count = 5000;

  const positionsArray = new Float32Array(count * 3);
  const colorsArray = new Float32Array(count * 3);

  const texture = useLoader(THREE.TextureLoader, '/particles/1.png')

  for(let i = 0; i< count * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 10
    colorsArray[i] = Math.random()
  }

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const step = 0.5;
    for(let i = 0; i < count; i++) {
      const i3 = i*3;
      const x = particlesGeo.current.attributes.position.array[i3]
      particlesGeo.current.attributes.position.array[i3 + 1] = Math.sin((t * step) + x);
    }
    particlesGeo.current.attributes.position.needsUpdate = true;
    // particles.current.rotation.y += delta * 0.2;
  })

  return(
    <>
      <points
        ref={particles}
      >
        <pointsMaterial 
          size={0.1} 
          sizeAttenuation
          alphaMap={texture}
          alphaTest={0.001}
          depthWrite= {false}
          blending={THREE.AdditiveBlending}
          vertexColors
          transparent
        />
        {/* <sphereBufferGeometry args={[1, 32, 32]}/> */}
        {/* <boxBufferGeometry args={[1, 1, 1, 10, 10, 10, 10]}/> */}
        {/* <planeGeometry args={[1, 1, 1, 10]}/> */}
        <bufferGeometry
          ref={particlesGeo}
        >
          <bufferAttribute 
            attachObject={['attributes', 'position']} 
            count={count}
            array={positionsArray}
            itemSize={3} 
          />
          <bufferAttribute 
            attachObject={['attributes', 'color']} 
            count={count}
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