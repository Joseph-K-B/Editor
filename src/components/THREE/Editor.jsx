import { Suspense, useEffect} from "react";
import { Html, OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";


import Terrain from "./Staging/Terrain";
import { useStore } from "../../hooks/useStand";
import GeometriesSwitch from './Switches/GeometriesSwtch';

function Editor() {
  const shaders = useStore((state) => state.shaders);
  const mesh = useStore((state) => state.mesh);
  const grid = useStore((state) => state.grid);

  const { spring } = useSpring({
    spring: mesh,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const scale = spring.to([0, 1], [1, mesh.geometry.scale]);

  return(
    <>
      <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
        {grid ? <Terrain /> : null}
        <a.mesh
          // scale={scale}
          scale={mesh.geometry.scale}
        >
          <meshBasicMaterial color={mesh.material.color} wireframe={mesh.material.wireframe}/>
          <GeometriesSwitch 
            shape={mesh.geometry.shape}             
          />
        </a.mesh>
      </Suspense>
    </>
  );
};

export default Editor;
