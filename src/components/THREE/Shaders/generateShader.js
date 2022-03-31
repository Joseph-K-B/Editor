import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";


function generateShader(name, vertex, fragment) {
  const shader = shaderMaterial({
    randomfactors: [1, 1, 1], 
    uTime: 1,
    uMouse: { type: 'v2', value: new THREE.Vector2()},
    uColor: { value: new THREE.Color('aqua')},
    vertex,
    fragment 
  });

  extend({ [name]: shader });

  return shader
}

export { generateShader }