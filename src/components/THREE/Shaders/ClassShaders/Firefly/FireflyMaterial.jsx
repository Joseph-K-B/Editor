import * as THREE from 'three'
import { extend } from '@react-three/fiber'

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

export default class FireflyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        u_time: { type: 'f', value: 0 },
        u_color: { type: 'v3', value: new THREE.Color()},
        u_pixelRatio: { type: 'v2', value: Math.min(window.devicePixelRatio, 2) },
        u_size: { type: 'f', value: 150 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
  }

  get time() {
    return this.uniforms.u_time.value
  }

  set time(f) {
    this.uniforms.u_time.value = f
  }

  get color() {
    return this.uniforms.u_color.value
  }

  set color(v) {
    this.uniforms.u_color = v
  }

  get size() {
    return this.uniforms.u_size.value
  }

  set size(f) {
    this.uniforms.u_size = f
  }  
}

extend({ FireflyMaterial })