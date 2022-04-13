import * as THREE from "three";
import { extend } from '@react-three/fiber';

import vertexShader from './Archive/particles/vertex.glsl';
import fragmentShader from './Archive/particles/fragment.glsl';

export default class ParticleMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { type: 'f', value: 0},
        uSize: {type: 'f', value: 2.0},
        uMouse: {type: 'v2', value: new THREE.Vector2()},
        uResolution: { type: 'v2', value: new THREE.Vector2()},
      },

      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  };

  get time() {
    return this.uniforms.uTime.value
  };

  set time(f) {
    this.uniforms.uTime.value = f
  };

  get size() {
    return this.uniforms.uTime.value
  };

  set size(f) {
    this.uniforms.uSize.value = f
  };
  
  get resolution() {
    return this.uniforms.uResolution.value
  };

  set resolution(v) {
    this.uniforms.uResolution.value = v
  };

  get mouse() {
    return this.uniforms.uMouse.value
  };

  set mouse(v) {
    this.uniforms.uMouse.value = v
  };

  get color() {
    return this.uniforms.aColor.value
  }

  set color(v) {
    this.uniforms.aColor.value = v
  }
}

extend({ ParticleMaterial });
