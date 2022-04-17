 import { useEffect, useRef, useState } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Glyph from './Glyph';
import Ecliptic from "./Ecliptic";
import { Vector3 } from 'three';


function Geo({ 
  xRad, 
  zRad, 
  scale, 
  revolution,
  position
}) {
  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);
  const mesh = useRef();

  useEffect(() => {
    mesh.current ? setLoading(false) : null
    console.log(mesh.current)
  }, [])

  const toggleActive = () => {
    setActive(!active);
    console.log(mesh.current)
  }

  const vec = new Vector3();
  const vecTwo = new Vector3();

    useFrame((state, delta) => {
      const step = 0.5;
      if(active) {
        vec.set(mesh.current.position)
        mesh.current.position.lerp(vec, step);
      } else {
        const t = state.clock.getElapsedTime() * revolution / 7;
        const x = xRad * Math.sin(t);
        const z = zRad * Math.cos(t);
        mesh.current.position.x = x;
        mesh.current.position.z = z;
      }
    });

  return (
    // loading ? <Html><h1>Loading</h1></Html> :
      <>
        <mesh
          ref={mesh}
          scale={scale}
          position={position}
          onClick={toggleActive}
        >
          <torusBufferGeometry  args={[1, 0.2, 16, 100]}/>
          <meshBasicMaterial color='gold'/>
          <gridHelper />
        </mesh>
        {/* <Glyph 
          color='green' 
        /> */}
        <Ecliptic color='red' xRad={xRad} zRad={zRad} />
        <gridHelper />
      </>
  );
};

export default Geo;