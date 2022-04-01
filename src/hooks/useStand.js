import create from 'zustand'
import * as shaders from '../components/THREE/Shaders/Archive/index';

const useStore = create((set) => ({
  /* GUI Controls */
  //Camera
  camera: {
    positions: [
      [0, 0, 5],
      [0, 0, -5],
      [0, 10, 0],
    ],
    activePosition: [0, 0, 5],
    targetPosition: [],
    prevPosition: [],
    next: false,
    prev: false, 
  },
  setCamera: (camera) => set({camera}),
  //Particles
  particles: {
    count: 5000,
    size: 0.02,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomPower: 3,
  },
  setParticles: (particles) => set({particles}),
  // Shaders Archive
    shaders: [
      {
        id: '0',
        fragementShader: shaders.frag0.default
      },
      {
        id: '1',
        fragementShader: shaders.frag1.default
      },
      {
        id: '2',
        fragementShader: shaders.frag2.default
      },
      {
        id: '3',
        fragementShader: shaders.frag3.default
      },
      {
        id: '4',
        fragementShader: shaders.frag4.default
      },
      {
        id: '5',
        fragementShader: shaders.frag5.default
      },
      {
        id: '6',
        fragementShader: shaders.frag6.default
      },
      {
        id: '7',
        fragementShader: shaders.frag7.default
      },
      {
        id: '8',
        fragementShader: shaders.frag8.default
      },
      {
        id: '9',
        fragementShader: shaders.frag9.default
      },
      {
        id: '10',
        fragementShader: shaders.frag10.default
      },
      {
        id: '11',
        fragementShader: shaders.frag11.default
      },
      {
        id: '12',
        fragementShader: shaders.frag12.default
      },
    ],

    // Drei Select Test
    selection: [],
    setSelection: (selection) => set({selection}),
    color: {
      headColor:  'purple',
      shoulderLColor: 'purple',
      shoulderRColor: 'purple',
    },
    setColor: (color) => set({color}),
    centerLight: true,
    setCenterLight: (centerLight) => set({centerLight}),
}));

export {useStore}