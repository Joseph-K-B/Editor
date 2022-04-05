import { Plane, Sky } from "@react-three/drei";


function Terrain() {

  return (
    <>
      <Sky distance={450000} sunPosition={[0, -0.15, 0]} inclination={0} azimuth={0.25} />
      <fog color='#262837' near={1} far={1000}/>
      <Plane
        args={[100, 100, 10]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1, 0]} 
        receiveShadow
      >
        <meshPhysicalMaterial 
          color='black' 
          roughness={1}
          clearcoat={1}
          clearcoatRoughness={1}
        />
      </Plane>
    </>
  );
};

export default Terrain;