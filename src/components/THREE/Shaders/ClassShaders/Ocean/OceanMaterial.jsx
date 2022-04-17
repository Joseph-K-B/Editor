import * as THREE from 'three';
import { extend } from '@react-three/fiber';

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

export default class OceanMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0},
        uColor: { value: new THREE.Color('white')},
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2)},
        uSize: { value: 150 },

        uBigWaveElevation: {value: 0.2},
        uBigWaveFrequency: {value: new THREE.Vector2(4, 1.5)},
        uBigWaveSpeed: {value: 0.75},
        
        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3.0 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallWavesIterations: { value: 4.0 },

        uDepthColor: {value: new THREE.Color('blue')},
        uSurfaceColor: {value: new THREE.Color('aqua')},
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5.0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    })
  }

    get time() {
      return this.uniforms.uTime.value
    }
  
    set time(t) {
      this.uniforms.uTime.value = t
    }

    get bigWavesElevation() {
      return this.uniforms.uBigWaveElevation.value
    }

    set bigWavesElevation(vec) {
    this.uniforms.uBigWaveElevation.value = vec
  }

    get bigWavesFrequency() {
      return this.uniforms.uBigWaveFrequency.value
    }

    set bigWavesFrequency(num) {
    this.uniforms.uBigWaveFrequency.value = num
  }

    get bigWavesSpeed() {
      return this.uniforms.uBigWaveSpeed.value
    }

    set bigWavesSpeed(num) {
    this.uniforms.uBigWaveSpeed.value = num
  }

    get smallWavesElevation() {
      return this.uniforms.uSmallWavesElevation.value
    }

    set smallWavesElevation(num) {
    this.uniforms.uSmallWavesElevation.value = num
  }

    get smallWavesFrequency() {
      return this.uniforms.uSmallWavesFrequency.value
    }

    set smallWavesFrequency(num) {
    this.uniforms.uSmallWavesFrequency.value = num
  }

    get smallWavesSpeed() {
      return this.uniforms.uSmallWavesSpeed.value
    }

    set smallWavesSpeed(num) {
    this.uniforms.uSmallWavesSpeed.value = num
  }

  get smallWavesIterations() {
    return this.uniforms.uSmallWavesIterations.value
  }

    set smallWavesIterations(num) {
    this.uniforms.uSmallWavesIterations.value = num
  }


    get depthColor() {
      return this.uniforms.uDepthColor.value
    }

    set depthColor(color) {
    this.uniforms.uDepthColor.value = color
  }

    get surfaceColor() {
      return this.uniforms.uSurfaceColor.value
    }

    set surfaceColor(color) {
    this.uniforms.uSurfaceColor.value = color
  }

    get colorOffset() {
      return this.uniforms.uColorOffset.value
    }

    set colorOffset(num) {
    this.uniforms.uColorOffset.value = num
  }

    get colorMultiplier() {
      return this.uniforms.uColorMultiplier.value
    }

    set colorMultiplier(num) {
    this.uniforms.uColorMultiplier.value = num
  }
}
extend({ OceanMaterial })