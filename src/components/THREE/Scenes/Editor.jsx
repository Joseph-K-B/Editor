import { Suspense, useRef} from "react";
import { Html } from "@react-three/drei";
import { a } from "@react-spring/three";

import { useStore } from "../../../hooks/useStand";
import Terrain from "../Staging/Terrain";
import GeometriesSwitch from "../Switches/GeometriesSwtch";

function Editor() {
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
        <a.mesh ref={ref} scale={mesh.geometry.scale}>
          <meshBasicMaterial color={mesh.material.color} wireframe={mesh.material.wireframe}/>
          <GeometriesSwitch shape={mesh.geometry.shape} />
        </a.mesh>
      </Suspense>
    </>
  );
};

export default Editor;
