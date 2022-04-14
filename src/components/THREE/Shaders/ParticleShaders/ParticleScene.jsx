import Grass from "./Grass";
import GrassParticles from "./GrassParticles";
import Particles from "./Particles";


function ParticleScene({ grass }) {
  
  return(
    grass ?
      <> 
        <Grass>
          <Sphere position={[0, 0.001, 0]} scale={0.25}>
            <meshBasicMaterial color='purple' wireframe/>
          </Sphere>
        </Grass>
          <Sphere args={[0.5, 8, 8]} position={[0, 0.001, 0]}>
            <meshBasicMaterial color='white' wireframe/>
          </Sphere>
        <GrassParticles />
      </>
       :
      <Particles />
  );
};

export default ParticleScene;