import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Stats } from '@react-three/drei';

import { useStore } from '../../../hooks/useStand';

import Rio from '../Models/Rio';
import Fireflies from '../Shaders/ClassShaders/Firefly/Fireflies';

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
          <group position={[0, -1, 0]}>
            <Fireflies />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
};

export default ModelCanvas;