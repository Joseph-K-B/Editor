import { Suspense, useEffect, useRef} from "react";
import { Html, OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";


import Terrain from "./Staging/Terrain";
import { useStore } from "../../hooks/useStand";
import GeometriesSwitch from './Switches/GeometriesSwtch';

function Editor() {
  // const [active, setActive] = useState(0);
  const shaders = useStore((state) => state.shaders);
  const mesh = useStore((state) => state.mesh);
  const grid = useStore((state) => state.grid);


  const ref = useRef();

  // const { spring } = useSpring({
  //   spring: active,
  //   config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  // }); 

  // const target = mesh ? mesh.geometry.scale : 1
  // const scale = spring.to([0, target]);

  return(
    <>
      <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
        {grid ? <Terrain /> : null}
        <a.mesh
          ref={ref}
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
