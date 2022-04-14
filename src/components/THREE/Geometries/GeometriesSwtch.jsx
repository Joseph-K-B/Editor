function GeometriesSwitch({ shape }) {

  return (
    <>
    {           
      shape === 'plane' ? 
        <planeBufferGeometry args={[3, 3, 10]}/> :
      shape === 'cube' ?
        <boxBufferGeometry args={[2.5, 2.5, 2.5, 30, 30, 30]}/> :
      shape === 'sphere' ?
        <sphereBufferGeometry args={[1, 32, 32, 100]}/> :
      shape === 'cone' ?
        <coneBufferGeometry args={[1, 3, 5]}/> :
      shape === 'column' ?
        <cylinderBufferGeometry args={[1, 1, 5]}/> :
      shape === 'torus' ?
        <torusBufferGeometry args={[1, 3, 3]}/> :
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
        <tetrahedronBufferGeometry args={[3, 3, 3]}/> :
        <boxBufferGeometry args={[2.5, 2.5, 2.5, 30, 30, 30]}/>
    }
  </>
  );  
};

export default GeometriesSwitch;



