import { useRandomAttribute } from "../threeHooks/useRandomAttribute";

function GeometriesSwitch({ shape }) {
  const geoRef = useRandomAttribute();

  return (
    <>
    {           
      shape === 'plane' ? 
    <planeBufferGeometry ref={geoRef} args={[l, w, 10]}/> :
      shape === 'cube' ?
    <boxBufferGeometry ref={geoRef} args={[2.5, 2.5, 2.5, 30, 30, 30]}/> :
      shape === 'sphere' ?
    <sphereBufferGeometry ref={geoRef} args={[1, 32, 32, 100]}/> :
      shape === 'cone' ?
    <coneBufferGeometry ref={geoRef} args={[1, 3, 5]}/> :
      shape === 'column' ?
    <cylinderBufferGeometry ref={geoRef} args={[1, 1, 5]}/> :
      shape === 'torus' ?
    <torusBufferGeometry ref={geoRef} args={[1, 3, 3]}/> :
      shape === 'torusKnot' ?
    <torusKnotGeometry
    ref={geoRef}
      radius={3} 
      tube={4}
      radialSegments={10}            
      p={2}
      q={5}
    /> :
      shape === 'tetrahedron' ?
    <tetrahedronBufferGeometry ref={geoRef} args={[3, 3, 3]}/> :
    <boxBufferGeometry ref={geoRef} args={[2.5, 2.5, 2.5, 30, 30, 30]}/>
    }
  </>
  );  
};

export default GeometriesSwitch;



