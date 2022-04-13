import * as THREE from 'three';
import { extend } from '@react-three/fiber';

import vertexShader from './Archive/1/vertex.glsl';
import fragmentShader from './Archive/12/fragment.glsl';

export default class ShadeMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: {type: 'f', value: 0},
        uMouse: { type: 'v2', value: new THREE.Vector2()},
        uResolution: { type: 'v2', value: new THREE.Vector2()},
      },

      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  };

  get time() {
    return this.uniforms.uTime.value
  }

  set time(t) {
    this.uniforms.uTime.value = t
  }

  get resolution() {
    return this.uniforms.uResolution.value
  }

  set resolution(v) {
    return this.uniforms.uResolution.value = v
  }

  get mouse() {
    return this.uniforms.uMouse.value
  }

  set mouse(pos) {
    return this.uniforms.uMouse.value = pos
  }
}


extend({ ShadeMaterial });