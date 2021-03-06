/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import * as THREE from 'three';

import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import Fireflies from '../Shaders/ClassShaders/Firefly/Fireflies';

export default function Rio({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/models/rio/rio.glb');

  const texture = useLoader(THREE.TextureLoader, '/models/rio/rio.jpg');
  texture.flipY = false;

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null} 
      scale={0.55}
      position={[0, -1.75, 0]}
      rotation={[0, -Math.PI / 8, 0]}
    >
      <mesh 
        geometry={nodes.merged_terrain.geometry} 
        position={[0, -0.12, 0.01]} scale={0.23}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh 
        geometry={nodes.merged_emiss.geometry} 
        position={[1.22, 1.34, 2.43]} 
        rotation={[0, 1.35, 0]} 
        scale={[0.35, 0.44, 0.35]} 
      >
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>

  )
}

useGLTF.preload('models/rio/rio.glb');
