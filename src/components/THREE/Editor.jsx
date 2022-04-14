import { Suspense, useEffect} from "react";
import { Html, OrbitControls } from "@react-three/drei";


import Terrain from "./Staging/Terrain";
import { useStore } from "../../hooks/useStand";
import GeometriesSwitch from './Geometries/GeometriesSwtch';

function Editor() {
  const shaders = useStore((state) => state.shaders);
  const mesh = useStore((state) => state.mesh);
  const grid = useStore((state) => state.grid);

  useEffect(() => {
    console.log(shaders)
  })

  return(
    <>
      <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
        <OrbitControls makeDefault />
        {grid ? <Terrain /> : null}
        <mesh>
          <meshBasicMaterial color={mesh.material.color} />
          <GeometriesSwitch shape={mesh.geometry.shape} />
        </mesh>
      </Suspense>
    </>
  );
};

export default Editor;
