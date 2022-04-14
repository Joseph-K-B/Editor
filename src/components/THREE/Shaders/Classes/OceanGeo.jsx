// import { useFrame } from '@react-three/fiber';
// import { useRef } from 'react';
// import * as THREE from 'three';

// import './oceanMaterial';

// function OceanGeo() {
//   const oceanMaterial = useRef();

//   const props = {
//     bigWavesElevation: 0.2, 
//     bigWavesFrequency :(4.0, 1.5),
//     bigWavesSpeed: 0.75,
//     smallWavesElevation: 0.15,
//     smallWavesFrequency: 3.0,
//     smallWavesSpeed: 0.2,
//     smallWavesIterations: 4.0,
    
//     uColorOffset: 0.08,
//     uColorMultiplier : 5.0,
//   }

//   const depthColor = '#c90a30b5'
//   const surfaceColor ='#19cfcf'

//   useFrame((state, delta) => {
//     const t = state.clock.getElapsedTime();
//     oceanMaterial.current.time += delta
//   });


//   return(
//     <>
//       <mesh>
//         <planeBufferGeometry args={[2, 2, 512, 512]} side={THREE.DoubleSide} ref={geoRef}/>
//         <oceanMaterial 
//           ref={oceanMaterial}
//           blending={THREE.AdditiveBlending}
//           // uTime: { value: 0 },

//           bigWavesElevation = {props.bigWavesElevation}
//           bigWavesFrequency = {props.bigWavesFrequency}
//           bigWavesSpeed = {props.bigWavesSpeed}

//           smallWavesElevation = {props.smallWavesElevation}
//           smallWavesFrequency = {props.smallWavesFrequency}
//           smallWavesSpeed = {props.smallWavesSpeed}
//           smallWavesIterations = {props.smallWavesIterations}

//           depthColor = {`${depthColor}` }
//           surfaceColor =  {`${surfaceColor}`}
//           colorOffset = {props.uColorOffset}
//           colorMultiplier= {props.uColorMultiplier}
//           {...props}        
//         />
//       </mesh>
//     </>
//   );
// };

// export default OceanGeo;