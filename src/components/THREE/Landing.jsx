import { Html, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useStore } from "../../hooks/useStand";
import ShadeGeo from "./Shaders/ShadeGeo";
import Terrain from "./Staging/Terrain";


function Landing(){
  const shaders = useStore((state) => state.shaders)
  const grid = useStore((state) => state.grid);

  const [loading, setLoading] = useState();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    for(let i = 0; i < 10; i++) {
      {
        i % 2 === 0 && i < 8 ?
          positions.push([(i + i) - 5, 3.75, 0])
        :
        i >= 8 ?
          positions.push([
            ((i + i) - 14) + ((i % 2 ) * 2) + 1, 
            7.5, 
            0
          ])
        :
          positions.push([(i + i) - 7, 0, 0])
      }
    }
    setLoading(false);
  }, []);



  
  return (
      loading ? <Html><h1>Loading...</h1></Html> :
    <>
      <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      { grid ? <Terrain /> : null }
      <OrbitControls makeDefault/>
        <Suspense fallback={null}>
          <group 
            scale={0.25}
            position={[-0.25, -1, 0]}
            rotation={[0, -Math.PI * 0.1, 0]}
          >
            {positions.map((position) => 
              <ShadeGeo
                key={position} 
                scale={1.35} 
                fragment={shaders[12].fragmentShader} 
                position={[...position]} />
            )}
        </group>                          
      </Suspense>
    </Suspense>
    </>
  );
};

export default Landing;