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
    for(let i = 0; i < 12; i++) {
      {
        i % 2 === 0 && i < 8 ?
        positions.push([i + i, 3, 0],)
        :
        i === 1 ?
        positions.push([0, 0, 0],)
        :
        i === 8 ?
        positions.push([0, 6, 0],)
        :
        i > 8 && i % 2 === 0 ?
        positions.push([(i + i) / 5, 6, 0],)
        :
        i > 8 && i % 2 > 0 ?
        positions.push([(i + i) - 10, 6, 0],)
        :
        positions.push([(i + i) - 2, 0, 0],)
      }
    }
    setLoading(false);
    console.log(positions)
  }, []);



  
  return (
      loading ? <Html><h1>Loading...</h1></Html> :
    <>
      <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
      { grid ? <Terrain /> : null }
      <OrbitControls makeDefault/>
      <Suspense fallback={null}>
      {positions.map((position) => 
        <ShadeGeo 
          key={position} 
          fragment={shaders[12].fragmentShader} 
          position={[...position]} />
      )}                          
      </Suspense>
      </Suspense>
    </>
  );
};

export default Landing;