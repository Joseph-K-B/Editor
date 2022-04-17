import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';

import { useStore } from '../../../hooks/useStand';

import Rio from '../Models/Rio';

import css from './canvas.css';


function ModelCanvas() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        <OrbitControls />
        <Suspense fallback={null}>
          <Rio />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ModelCanvas;