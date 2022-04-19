/* 
  Step by slerp
    gesture is close!

    -restrict bounds to distance field generated 
      by center point of parent

    - create target quaternion slightly ahead of 
      obj rotation around ecliptic radius

    - apply matrix transformation to torus based on target
    
    - fix raycast intersect to stash value

    - synchronously apply value to position state of torus
*/

import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {animated as a, useSpring} from '@react-spring/three';

import { useStore } from "../../hooks/useStand";
import { useDrag } from "react-use-gesture";

function Ecliptic({ xRad, zRad, color }) {
  const activeObject = useStore((state) => state.activeObject);
  const setActiveObject = useStore((state) => state.setActiveObject);

  const setActiveCamera = useStore ((state) => state.setActiveCamera);

  const [loading, setLoading] = useState(true);
  
  const { viewport } = useThree();
  
  const mesh = useRef();
  
  const { width, height, factor } = viewport;

  const [spring, setSpring] = useSpring(() => ({
    position: [1, 0, 0],
    scale: 1,   
  }));

  let planeIntersectPoint = new THREE.Vector3();

  // float distFromNuc = 
  //   Vector3.Distance(
  //     Camera.main.ScreenToWorldPoint(Input.mousePosition + new Vector3(0,0,cameraZ)), 
  //     nucleus.position
  //     );
  // float deg = 
  //   Mathf.Atan2(
  //     Camera.main.ScreenToWorldPoint
  // (Input.mousePosition + new Vector3(0,0,cameraZ)).y - nucleus.position.y, 
  //     Camera.main.ScreenToWorldPoint
  // (Input.mousePosition + new Vector3(0,0,cameraZ)).x - nucleus.position.x
  //     )

  /* 
    It’s helpful to think about sine and cosine as the Y(Z) and X 
    coordinates on a plane as Θ (theta) increases
  */
  const bind = useDrag(({ active,  offset: [x, z]}) => activeObject ? setSpring({
    position: [x, 0, z]
  }) : null, {
    /* 
      bounds are expressed in canvas coordinates!
      the center point is Vector3(0, 0, 0)
      diameter: 2
      circumfrence: Math.PI * 2 
    */

      bounds: { 
        left: -width / 2 * Math.acos(theta), 
        right: width / 2 * Math.sin(theta), 
        top: -height / 2, 
        bottom: height / 2
      },
      rubberband: true,
      transform: ([x, z]) => [(x / factor), (z / factor)],
    });

    const handleToggleDrag = () => {
      setActiveCamera(false);
      setActiveObject(!activeObject)
      console.log(factor)
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
  // const target = useRef();

  const rotationMatrix = new THREE.Matrix4();
  const targetQuaternion = new THREE.Quaternion();

  useEffect(() => {
    //traget quaternion should be slightly ahead of obj on revolution of ecliptic
    // target.current.position.set(xRad, 0, zRad);  
    // rotationMatrix.lookAt( target.current.position, mesh.current.position, mesh.current.up);
    targetQuaternion.setFromRotationMatrix( rotationMatrix );
  }, [])
    
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











  