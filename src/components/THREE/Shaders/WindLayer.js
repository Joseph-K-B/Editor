import * as THREE from 'three';

import { Abstract } from 'lamina/vanilla';

import vertex from './Archive/wind/vertex.glsl';
import fragment from './Archive/wind/fragment.glsl';

export default class WindLayer extends Abstract {
  static uTime = 0;
  static uSway = 0.5;
  static uLength = 1;

  static uNoiseScale = 10.0;
  static uNoiseStrength = 10.0;

  static uColorA = new THREE.Color('#ade266');
  static uColorB = new THREE.Color('#ade266');

  static uIsCurl = false;

  static vertexShader = vertex;
  static fragmentShader = fragment;

  constructor(props) {
    super(WindLayer, {
      name: 'GrassLayer',
      ...props,
    });
  };
};
