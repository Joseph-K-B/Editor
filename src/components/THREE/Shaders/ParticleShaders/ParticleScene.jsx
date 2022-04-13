import Grass from "../SAND/Grass";
import GrassParticles from "./Shaders/ParticleShaders/GrassParticles";
import ShadeGeo from "./Shaders/ShadeGeo";

function ParticleScene() {

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