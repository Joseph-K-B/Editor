import { ComputedAttribute } from "@react-three/drei";

import CustomShaderMaterial from 'three-custom-shader-material'


function GrassParticles() {

  return (
    <>
      <points>
        <bufferGeometry>
          <ComputedAttribute
            name='position'
            compute={() =>
              new THREE.Float16BufferAttribute(
                new Array(nPoints).fill(0).map(() => Math.random()),
                3
              )
            }
          />
        </bufferGeometry>
        <CustomShaderMaterial
          ref={grassMatRef}
          baseMaterial={THREE.PointsMaterial}
          size={0.015}
          transparent
          uniforms={{ uTime: {value: 0}}}
          vertexShader={patchShaders(
            vertexShader
          )}
          fragmentShader = {fragmentShader}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};

export default GrassParticles;
