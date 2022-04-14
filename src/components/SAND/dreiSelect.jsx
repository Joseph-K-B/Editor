import { useEffect, useRef, useState } from "react";

import { Select, Sphere, SpotLight } from "@react-three/drei";

import { useStore } from "../../hooks/useStand";
import { useFrame } from "@react-three/fiber";


function DreiSelect() {
  const setSelection = useStore((state) => state.setSelection);
  const selection = useStore((state) => state.selection);
  const color = useStore((state) => state.color);
  const setCenterLight = useStore((state) => state.setCenterLight);
  const centerLight = useStore((state) => state.centerLight);


  const [toggleR, setToggleR] = useState(false);
  const [toggleL, setToggleL] = useState(false);
  const [toggleLight, setToggleLight] = useState(false);

  const lightL = useRef();
  const sphereL = useRef();
  const lightR = useRef();
  const sphereR = useRef();

  const handleToggleR = () => {
    setToggleR(!toggleR);
  }

  const handleToggleL = () => {
    setToggleL(!toggleL);
  }

  const handleToggleLight = () => {
    setCenterLight(!centerLight);
    console.log(centerLight)
  }

  useEffect(() => {
    lightL.current.target = sphereL.current;
    lightR.current.target = sphereR.current;
  }, [])

  useFrame((state, delta) => {
    const leftSphere = sphereL.current.position;
    toggleR ? sphereR.current.position.z += Math.sin(5) * delta: null;
    toggleL ? leftSphere.z += Math.sin(10) * delta: null;
  })

  return(
    <>
      <Select sphere multiple onChange={setSelection} >
        <group>
          <SpotLight 
            position={[0, 5, 0]}
            color='#F0F0F0'
            angle={0.5}
            attenuation={7.0}
            intensity={10.0}
            distance={7.0}
            visible={centerLight}
          />
          <Sphere onClick={handleToggleLight}>
            <meshPhysicalMaterial 
              color={color.headColor}
              metalness={0}
              roughness={0}
              transmission={1}
              opacity={1}
              ior={1.5}
              thickness={0.01}
              specularIntensity={1}
              specularColor='white'
            />
          </Sphere>
        </group>
        <group  position={[3, 0, 0]}>
          <SpotLight 
            ref={lightR} 
            position={[0, 5, 0]}
            color='#F0F0F0'
            angle={0.5}
            attenuation={7.0}
            intensity={10.0}
            distance={7.0}
            visible={toggleLight ? true : false}
          />
          <Sphere
            ref={sphereR} 
            onClick={handleToggleR} 
          >
            <meshPhongMaterial 
              color={color.shoulderRColor}
            />
          </Sphere>
        </group>
        <group  position={[-3, 0, 0]}>
          <SpotLight 
            ref={lightL} 
            position={[0, 5, 0]} 
            color='#F0F0F0'
            angle={0.5}
            attenuation={7.0}
            intensity={10.0}
            distance={7.0}
            visible={toggleLight ? true : false}
            castShadow
          />
          <Sphere
            ref={sphereL}  
            onClick={handleToggleL} 
          >
            <meshStandardMaterial color={color.shoulderLColor} />
          </Sphere>
        </group>
      </Select>
    </>
  );
};

export default DreiSelect