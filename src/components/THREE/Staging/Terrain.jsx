import { useRef } from "react";
import * as THREE from 'three';
import { Plane, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useStore } from "../../../hooks/useStand";


function Terrain() {
  const darkMode = useStore((state) => state.darkMode);

  const mesh = useRef();

  const color = new THREE.Color();

  useFrame(() => {
    const step = 0.05
   if(darkMode) {
     color.set('white');
     mesh.current.material.color.lerp(color, step);
    }
    if(!darkMode) {
      color.set('black')
      mesh.current.material.color.lerp(color, step);
   } 
  })

  return (
    <>
      {/* <Sky distance={450000} sunPosition={[0, -0.15, 0]} inclination={0} azimuth={0.25} /> */}
      {/* <fog color='#262837' near={1} far={1000}/> */}
      <Plane
        ref={mesh}
        args={[100, 100, 100, 100]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1, 0]} 
        // receiveShadow        
      >
        {/* <meshPhysicalMaterial 
          color='black' 
          roughness={1}
          clearcoat={1}
          clearcoatRoughness={1}
        /> */}
        <meshBasicMaterial wireframe color={darkMode ?  'white' : 'black'}/>
      </Plane>
    </>
  );
};

export default Terrain;