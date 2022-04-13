import create from 'zustand'
import * as shaders from '../components/THREE/Shaders/Archive/index';

import * as THREE from 'three';

const useStore = create((set) => ({
  
  //Theme//
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),


  //Drawer Toggle
  lActive: false,
  setLActive: (lActive) => set({lActive}),
  rActive: false,
  setRActive: (rActive) => set({rActive}),
  navActive: false,
  setNavActive: (navActive) => set({navActive}),


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


  //Grid Toggle
  grid: false,
  setGrid: (grid) => set({grid}),

  //Geometry
  geometry: {
    shape: 'cube',
    color: 'blue',
  },
  setGeometry: (geometry) => set({geometry}),


  //Particles
  particles: {
    count: 5000,
    size: 1,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomPower: 3,
    insideColor: new THREE.Color('#ffff4f'),
    outsideColor: new THREE.Color('#1bFFFF'),
  },
  setParticles: (particles) => set({particles}),




  // Shaders Archive
  shaders: [
    {
      id: '0',
      fragmentShader: shaders.frag0.default
    },
    {
      id: '1',
      fragmentShader: shaders.frag1.default
    },
    {
      id: '2',
      fragmentShader: shaders.frag2.default
    },
    {
      id: '3',
      fragmentShader: shaders.frag3.default
    },
    {
      id: '4',
      fragmentShader: shaders.frag4.default
    },
    {
      id: '5',
      fragmentShader: shaders.frag5.default
    },
    {
      id: '6',
      fragmentShader: shaders.frag6.default
    },
    {
      id: '7',
      fragmentShader: shaders.frag7.default
    },
    {
      id: '8',
      fragmentShader: shaders.frag8.default
    },
    {
      id: '9',
      fragmentShader: shaders.frag9.default
    },
    {
      id: '10',
      fragmentShader: shaders.frag10.default
    },
    {
      id: '11',
      fragmentShader: shaders.frag11.default
    },
    {
      id: '12',
      fragmentShader: shaders.frag12.default
    },
    {
      id: '13',
      fragmentShader: shaders.frag13.default
    },
    {
      id: '14',
      fragmentShader: shaders.frag14.default
    },
    {
      id: '15',
      fragmentShader: shaders.frag15.default
    },
    {
      id: '16',
      fragmentShader: shaders.frag16.default
    },
    {
      id: '17',
      fragmentShader: shaders.frag17.default
    },
    {
      id: '18',
      fragmentShader: shaders.frag18.default
    },
    {
      id: '19',
      fragmentShader: shaders.frag19.default
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