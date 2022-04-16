import { Instance, Instances, Line, PointMaterial, QuadraticBezierLine, Sphere, Torus } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animated as a, useSpring } from "react-spring";

import { useStore } from "../../hooks/useStand";
import Ecliptic from "./Ecliptic";


function Glyph() {
 const setActiveObject = useStore((state) => state.setActiveObject)
 const activeObject = useStore((state) => state.activeObject)

  const [position, setPosition] = useState([0, 0, 0]);

  const { size, viewport } = useThree();
  // const { width, height, factor } = viewport

  const ref = useRef();

  const aspect = size.width / viewport.width;
  const points=[[0, -2, 0], [0, 2, 0]]

  const toggleActive = (obj) => {
    setActiveObject(obj);
  }

  // const { spring } = useSpring(() => ({ position: [0, 0, 0], scale: [1, 1, 1] }))

  // const bind = useDrag(({ offset: [x, y] }) => spring.start({ position: [x, y, 0] }), {
  //   // bounds are expressed in canvas coordinates!
  //   bounds: { left: -width / 2, right: width / 2, top: -height / 2, bottom: height / 2 },
  //   rubberband: true,
  //   transform: ([x, y]) => [x / factor, -y / factor]
  // });


  // useEffect(() => {
  //   activeObject ?
  //   window.addEventListener('mouseup', setActiveObject(null)) : null
  // }, [])

  return(
    <>
      {/* <points>
        <PointMaterial />
      </points>
      <group>
        <Line
          points={points}
          color="green"                   
          lineWidth={3}                   
          dashed={false}                  
          vertexColors={[[0, 0, 0], [0, 3, 0]]}
        >
        </Line> */}
        <a.mesh
          // {...bind()}
          // {...spring}
          ref={ref} 
          scale={0.35}          
          rotation={[Math.PI / 2, 0, 0]}
          onClick={toggleActive}
          // position={position}
        >
          <torusBufferGeometry
            args={[1, 0.2, 16, 100]}
          />
          <meshBasicMaterial
            color={activeObject ? 'gold' : 'purple'}
          />
        </a.mesh>
      {/* </group> */}
      {/* <Line
        points={[[0, -2, 0], [0, 2, 0], [3, 0, 0]]}
        color="green"                   
        lineWidth={3}                   
        dashed={false}                  
      />
      <Line
        points={[[0, -2, 0], [0, 2, 0], [-3, 0, 0]]}
        color="green"                   
        lineWidth={3}                   
        dashed={false}                  
      />
      <QuadraticBezierLine
        start={[0, 2, 0]}
        end={[0, 0, -3]}
        mid={[0, 2, 0]}            
        color="purple"
        lineWidth={3}
        dashed={false}
      />
      <QuadraticBezierLine
        start={[0, 2, 0]}
        end={[0, 0, 3]}
        mid={[0, 2, 0]}            
        color="purple"
        lineWidth={3}
        dashed={false}
      >
        <Sphere>
          <meshDepthMaterial color='gold' />
        </Sphere>
      </QuadraticBezierLine> */}
    </>
  );
};

export default Glyph;