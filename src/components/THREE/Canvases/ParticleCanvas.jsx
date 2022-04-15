import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

import { useStore } from '../../../hooks/useStand';

import ParticleScene from '../Shaders/ParticleShaders/ParticleScene';

import css from './canvas.css';

function ParticleCanvas() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
      <OrbitControls />
        <Stats />
        <ParticleScene grass/>
      </Canvas>
    </>
  );
};

export default ParticleCanvas;