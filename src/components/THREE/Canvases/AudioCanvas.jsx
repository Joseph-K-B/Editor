import { Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useStore } from '../../../hooks/useStand';
import AudioScene from '../Scenes/AudioScene';

import css from './canvas.css';

function AudioCanvas() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Suspense fallback={null}>
          <AudioScene toggle />
        </Suspense>
      </Canvas>
    </>
  );
};

export default AudioCanvas;