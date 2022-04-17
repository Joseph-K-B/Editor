import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {animated as a, useSpring} from '@react-spring/three';

import { useStore } from "../../hooks/useStand";
import { useDrag } from "react-use-gesture";

function Ecliptic({ xRad, zRad, color, revolution = 3}) {
  const activeObject = useStore((state) => state.activeObject);
  const setActiveObject = useStore((state) => state.setActiveObject);

  const setActiveCamera = useStore ((state) => state.setActiveCamera);

  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);
  
  const { size, viewport } = useThree();
  
  const mesh = useRef();
  const ref = useRef();
  
  const { width, height, factor } = viewport

  
  const [spring, setSpring] = useSpring(() => ({ position: [1, 0, 0], scale: [1, 1, 1] }))

  const bind = useDrag(({ offset: [x, z] }) => activeObject ? setSpring({ position: [x, 0, z] }) : null, {
    // bounds are expressed in canvas coordinates!
    bounds: { left: 1 * Math.cos(-width / -width), right: 1 * Math.sin( width / width), top: -height / 2, bottom: height / 2 },
    rubberband: true,
    transform: ([x, z]) => [x / factor, z / factor]
  });

  const handleToggleDrag = () => {
    setActiveCamera(false);
    setActiveObject(!activeObject)
    console.log(activeObject)
  };

  useEffect(() => {
    mesh.current ? setLoading(false) : null
    console.log(mesh.current)
  }, []);

  
  
  const points = [];
  for (let i = 0; i < 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    const x = xRad * Math.cos(angle);
    const z = zRad * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  };

  points.push(points[0]);

  const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

  const vec = new THREE.Vector3();

  // useFrame((state, delta) => {
  //   const step = 0.5;
  //   if(active) {
  //     vec.set(mesh.current.position)
  //     mesh.current.position.lerp(vec, step);
  //   } else {
  //     const t = state.clock.getElapsedTime() * revolution / 7;
  //     const x = xRad * Math.sin(t);
  //     const z = zRad * Math.cos(t);
  //     mesh.current.position.x = x;
  //     mesh.current.position.z = z;
  //   }
  // });

  return (
    <group>
      <line 
        geometry={lineGeo}
      >
        <lineBasicMaterial 
          color={color} 
          linewidth={1} 
        />
      <a.mesh
        ref={mesh}
        {...bind()}
        {...spring}
        scale={0.25}
        onClick={handleToggleDrag}
      >
        <torusBufferGeometry  args={[1, 0.2, 16, 100]} />
        <meshBasicMaterial color={activeObject ? 'purple' : 'gold'} />
        {/* <gridHelper colorGrid='green'/> */}
      </a.mesh>
      </line>
    </group>
  )
};

export default Ecliptic;