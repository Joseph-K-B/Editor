//Dependencies
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
//Context
import { useStore } from '../../../hooks/useStand';
//Children
import AudioScene from '../Scenes/AudioScene';

import css from './canvas.css';

function AudioCanvas() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
          <OrbitControls />
          <AudioScene toggle />
      </Canvas>
    </>
  );
};

export default AudioCanvas;