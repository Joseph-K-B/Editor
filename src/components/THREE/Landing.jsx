import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from 'three';

import { Html, OrbitControls, Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { useStore } from "../../hooks/useStand";

import ShadeGeo from "./Shaders/ShadeGeo";
import Terrain from "./Staging/Terrain";
import OceanGeo from "./Shaders/ClassShaders/Ocean/OceanGeo";
import Glyph from "../SAND/Glyph";
import Ecliptic from "../SAND/Ecliptic";


function Landing(){
  const shaders = useStore((state) => state.shaders);

  const activeObject = useStore((state) => state.activeObject);
  const activeCamera = useStore((state) => state.activeCamera);

  const grid = useStore((state) => state.grid);

  const {camera} = useThree();

  const [loading, setLoading] = useState();
  const [activeOrbit, setActiveOrbit] = useState();
  const [positions] = useState([]);

  const orbitRef = useRef();
  // const planeIntersect = useRef();
  const planeHelper = new THREE.Plane(new THREE.Vector3(0, 0, 0) ,0);

  // useEffect(() => {
  //   for(let i = 0; i < 10; i++) {
  //     {
  //       i % 2 === 0 && i < 8 ?
  //         positions.push([(i + i) - 5, 3.75, 0])
  //       :
  //       i >= 8 ?
  //         positions.push([
  //           ((i + i) - 14) + ((i % 2 ) * 2) + 1, 
  //           7.5, 
  //           0
  //         ])
  //       :
  //       positions.push([(i + i) - 7, 0, 0])
  //     }
  //   }
  //   setLoading(false);
  // }, []);

  const targetPosition = new THREE.Vector3();
  
  useEffect(() => {
    if( orbitRef.current && activeObject ) {
      const currentCamera = camera.position.clone()
      if(activeObject) {
        orbitRef.current.reset()
        targetPosition.set(activeObject.position);
      }
      camera.position.copy(currentCamera);
      camera.lookAt(0, 0, 0);
    }
    // planeIntersect.current ? setLoading(false) : null;
  })



  
  return (
      loading ? <Html><h1>Loading...</h1></Html> :
    <>
      <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      { grid ? <Terrain /> : null }
      <OrbitControls 
        enabled={activeObject ? false : true} 
        ref={orbitRef}
      />
        <Suspense fallback={null}>
          {/* <group 
            scale={0.25}
            position={[-0.25, -1, 0]}
            rotation={[0, -Math.PI * 0.1, 0]}
          >
          {positions.map((position) => 
            <ShadeGeo
              key={position} 
              scale={1.35} 
              fragment={shaders[12].fragmentShader}
              position={[...position]} 
            />
          )}
          </group>*/}
          {/* <DragGesture /> */}
          {/* <Glyph /> */}
          <Ecliptic 
            color='blue'
            xRad={1}
            zRad={1}
            planeIntersect={planeHelper}
          />
          {/* <Plane args={[3, 3, 10, 10]} rotation={[Math.PI * 0.5, 0, 0]} ref={planeIntersect}> */}
          <planeHelper args={[planeHelper, 5, "red"]}/>
            {/* <meshBasicMaterial color='orange' wireframe/> */}
          {/* </Plane> */}
          {/* <OceanGeo /> */}
      </Suspense>
    </Suspense>
    </>
  );
};

export default Landing;