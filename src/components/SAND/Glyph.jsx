import { Line } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import {animated as a, useSpring} from '@react-spring/three';

import { useStore } from "../../hooks/useStand";
import { useDrag } from "react-use-gesture";


function Glyph() {
  const activeObject = useStore((state) => state.activeObject);
  const setActiveObject = useStore((state) => state.setActiveObject);

 const setActiveCamera = useStore ((state) => state.setActiveCamera);

  const { size, viewport } = useThree();
  
  const ref = useRef();
  
  const { width, height, factor } = viewport

  const points=[[0, -2, 0], [0, 2, 0]]

  const [spring, setSpring] = useSpring(() => ({ position: [0, 0, 0], scale: [1, 1, 1] }))

  const bind = useDrag(({ offset: [x, y] }) => activeObject ? setSpring({ position: [x, y, 0] }) : null, {
    // bounds are expressed in canvas coordinates!
    bounds: { left: -width / 2, right: width / 2, top: -height / 2, bottom: height / 2 },
    rubberband: true,
    transform: ([x, y]) => [x / factor, -y / factor]
  })


  const handleToggleDrag = () => {
    setActiveCamera(false);
    setActiveObject(!activeObject)
    console.log(activeObject)
  }

  return(
    <>
      <group>
        <Line
          points={points}
          color="green"                   
          lineWidth={3}                   
          dashed={false}                  
          vertexColors={[[0, 0, 0], [0, 3, 0]]}
        >
        </Line>
        <a.mesh
          {...bind()}
          {...spring}
          ref={ref} 
          scale={0.35}          
          rotation={[Math.PI / 2, 0, 0]}
          onClick={handleToggleDrag}
          // position={position}
        >
          <torusBufferGeometry
            args={[1, 0.2, 16, 100]}
          />
          <meshBasicMaterial
            color={activeObject ? 'gold' : 'purple'}
          />
        </a.mesh>
      </group>
    </>
  );
};

export default Glyph;