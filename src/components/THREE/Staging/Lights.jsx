

function Lights() {

  return (
    <>
      <hemisphereLight
        color='blue' 
        intensity={0.15}
      />
      <directionalLight
        // intensity={0.2}
      />
      <fog near={1} far={10} color='tan'/>
    </>
  );
};

export default Lights;