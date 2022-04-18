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























































// import * as THREE from 'three';
// import { useEffect, useRef, useState } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import {animated as a, useSpring} from '@react-spring/three';

// import { useStore } from "../../hooks/useStand";
// import { useDrag } from "react-use-gesture";

// function Ecliptic({ xRad, zRad, color, planeIntersect}) {
//   const activeObject = useStore((state) => state.activeObject);
//   const setActiveObject = useStore((state) => state.setActiveObject);

//   const setActiveCamera = useStore ((state) => state.setActiveCamera);

//   const [active, setActive] = useState();
//   const [loading, setLoading] = useState(true);
  
//   const { size, viewport, intersect } = useThree();
  
//   const mesh = useRef();
//   const ref = useRef();
  
//   const { width, height, factor } = viewport
//   const [pos, setPos] = useState([1, 0, 0])
//   const aspect = size.width / viewport.width;

//   // const [spring, api] = useSpring(() => ({
//   //   position: pos,
//   //   scale: 1,
//   //   config: { friction: 10 },     
//   // }));

//   let planeIntersectPoint = new THREE.Vector3();

//   // const bind = useDrag(
//   //   ({ active, movement: [x, z], event }) => {
//   //     if(active) {
//   //       event.ray.intersectPlane(planeIntersect, planeIntersectPoint)
//   //       console.log(event.ray.intersectPlane(planeIntersect, planeIntersectPoint))
//   //       setPos([x, 0, z])
//   //     }
//   //     setActiveObject(active);

//   //     api.start({
//   //       position: [x, 0, z],
//   //       scale: active ? 1.2: 1,
//   //       bounds: { left: 1 * Math.cos(-width / -width), right: 1 * Math.sin( width / width), top: -height / 2, bottom: height / 2 },
//   //       rubberband: true,
//   //       transform: ([x, z]) => [x / factor, z / factor],
//   //     });
//   //     return
//   //   },
//   //   { delay: true }
//   //   )
    
//     const [spring, setSpring] = useSpring(() => ({ position: [1, 0, 0], scale: [1, 1, 1] }))
  
//     const bind = useDrag(({ offset: [x, z] }) => activeObject ? setSpring({ position: [x, 0, z] }) : null, {
//       bounds: { left: -width / Math.acos(0), right: width / Math.sin(0), top: -height / 2, bottom: height / 2 },
//       rubberband: true,
//       transform: ([x, z]) => [x / factor, z / factor]
//     });
  
//     const handleToggleDrag = () => {
//       setActiveCamera(false);
//       setActiveObject(!activeObject)
//       // console.log(viewport)
//     };
  
//     useEffect(() => {
//       mesh.current ? setLoading(false) : null
//       console.log(mesh.current)
//     }, []);
  
    
    
//     const points = [];
//     for (let i = 0; i < 64; i++) {
//       const angle = (i / 64) * 2 * Math.PI;
//       const x = xRad * Math.cos(angle);
//       const z = zRad * Math.sin(angle);
//       points.push(new THREE.Vector3(x, 0, z));
//     };
  
//     points.push(points[0]);
  
//     const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
  
//   const vec = new THREE.Vector3();
//   // const target = useRef();

//   const rotationMatrix = new THREE.Matrix4();
//   const targetQuaternion = new THREE.Quaternion();

//   useEffect(() => {
//     //traget quaternion should be slightly ahead of obj on revolution of ecliptic
//     // target.current.position.set(xRad, 0, zRad);  
//     // rotationMatrix.lookAt( target.current.position, mesh.current.position, mesh.current.up);
//     targetQuaternion.setFromRotationMatrix( rotationMatrix );
//   }, [])
    
//     // useFrame((state, delta) => {
//     //   const step = 0.5;
//     //   if(active) {
//     //     vec.set(mesh.current.position)
//     //     mesh.current.position.lerp(vec, step);
//     //   } else {
//     //     const t = state.clock.getElapsedTime() * revolution / 7;
//     //     const x = xRad * Math.sin(t);
//     //     const z = zRad * Math.cos(t);
//     //     mesh.current.position.x = x;
//     //     mesh.current.position.z = z;
//     //   }
//     // });
  
//     return (
//       <group>
//         <line 
//           geometry={lineGeo}
//         >
//           <lineBasicMaterial 
//             color={color} 
//             linewidth={1} 
//           />
//         <a.mesh
//           ref={mesh}
//           {...bind()}
//           {...spring}
//           scale={0.25}
//           onClick={handleToggleDrag}
//         >
//           <torusBufferGeometry  args={[1, 0.2, 16, 100]} />
//           <meshBasicMaterial color={activeObject ? 'purple' : 'gold'} />
//           {/* <gridHelper colorGrid='green'/> */}
//         </a.mesh>
//         </line>
//       </group>
//     )
//   };
  
//   export default Ecliptic;











  