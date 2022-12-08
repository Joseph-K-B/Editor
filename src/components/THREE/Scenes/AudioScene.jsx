import { Suspense } from "react";
import Track from "../Audio/Track";
import AudioZoom from "../Cameras/AudioZoom";


function AudioScene () {

  return(
    <>
    <Suspense fallback={null}>
      <mesh>
        <tetrahedronGeometry/>        
        <meshBasicMaterial />
      </mesh>
      <Track url='./Sonata_G_Major.mp3' />
      {/* <AudioZoom url='./Sonata_G_Major.mp3' /> */}
    </Suspense>
    </>
  );
};

export default AudioScene;