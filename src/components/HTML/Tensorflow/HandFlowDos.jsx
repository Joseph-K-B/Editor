// import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';
// // import * as handpose from '@tensorflow-models/handpose';
// import { useEffect, useRef } from 'react';
// import Webcam from 'react-webcam';

// import '@mediapipe/hands';
// import '@tensorflow/tfjs-backend-webgl';

// function HandFlowDos() {
//   const webcamRef = useRef(null);
//   const handsRef = useRef();


// const runHandpose = async () => {
//   await buildModel();
//   console.log("Handpose model loaded.");
//   //  Loop and detect hands
//     // setInterval(() => {
//     //   detect(net);
//     // }, 1000);
//   };

//   const buildModel = async () => {
//     const model = handPoseDetection.SupportedModels.MediaPipeHands;
//     const detectorConfig = {
//       runtime: 'tfjs',
//       modelType: 'full'
//     };
//     const detector = await handPoseDetection.createDetector(model, detectorConfig);
//     if(
//       typeof webcamRef.current !== 'undefined' &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//         const video = webcamRef.current.video;
//         const hands = await detector.estimateHands(video);    
//         console.log(hands)
//         handsRef.current = hands;
//       }
//   }

//   useEffect(() => {
//     runHandpose()
//   }, []);
//   console.log(handsRef.current)


//   return(
//     <>
//       <h1>Tensor</h1>
//       <Webcam
//         ref={webcamRef}
//         style={{
//           position: 'absolute',
//           marginLeft: 'auto',
//           marginRight: 'auto',
//           left: 0,
//           right: 0,
//           textAlign: 'center',
//           zIndex: 9,
//           width: 640,
//           height: 480,
//         }}
//       />
//     </>
//   );
// };

// export default HandFlowDos;