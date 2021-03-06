// import { useRef, useState, useEffect } from 'react';

// import * as tf from '@tensorflow/tfjs';
// import * as handpose from '@tensorflow-models/handpose';
// import Webcam from 'react-webcam';
// import { drawHand } from '../../utils/handGestures';

// import * as fp from 'fingerpose';
// import { useStore } from '../../hooks/useStand';

// function HandFlow() {
//   const setLActive = useStore((state) => state.setLActive);
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

// const runHandpose = async () => {
//   const net = await handpose.load();
//   console.log('handpose model loaded.')
//   setInterval(() => {
//     detect(net);
//   }, 10);
// };

// const detect = async (net) => {
//   if(
//     typeof webcamRef.current !== 'undefined' &&
//     webcamRef.current !== null &&
//     webcamRef.current.video.readyState === 4
//   ) {
//     const video = webcamRef.current.video;
//     const videoWidth  = webcamRef.current.video.videoWidth;
//     const videoHeight  = webcamRef.current.video.videoHeight;

//     webcamRef.current.video.width = videoWidth;
//     webcamRef.current.video.height = videoHeight;

//     canvasRef.current.width = videoWidth;
//     canvasRef.current.height = videoHeight;

//     const hand = await net.estimateHands(video);
//     // console.log(hand)

//     if(hand.length > 0) {
//       const GE = new fp.GestureEstimator([
//         fp.Gestures.VictoryGesture,
//         fp.Gestures.ThumbsUpGesture,
//       ]);
//       const gesture = await GE.estimate(hand[0].landmarks, 9.75);
//       if(gesture.gestures !== undefined && gesture.gestures.length > 0) {
//         const confidence = gesture.gestures.map(
//           (prediction) => prediction.confidence
//           );
//           const maxConfidence = confidence.indexOf(
//             Math.max.apply(null, confidence)
//             );
//         gesture.gestures[0].name === 'thumbs_up' ? setLActive(true) : null
//         gesture.gestures[0].name === 'victory' ? setLActive(false) : null
//         // console.log(gesture.gestures[maxConfidence].name);
//         // console.log(maxConfidence);
//       }
//     }
//     const ctx = canvasRef.current.getContext('2d');
//     drawHand(hand, ctx);
//   }
// }

// useEffect(() => {runHandpose()}, []);



//   return(
//     <>
//       <Webcam
//       ref={webcamRef}
//       style={{
//         position: 'absolute',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         left: 0,
//         right: 0,
//         textAlign: 'center',
//         zIndex: 9,
//         width: 640,
//         height: 480,
//       }}
//       />
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zindex: 9,
//           width: 640,
//           height: 480,
//         }}
//       />
//     </>
//   );
// };

// export default HandFlow;