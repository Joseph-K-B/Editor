import { Canvas } from '@react-three/fiber';
import {Stats } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

import { useStore } from '../../../hooks/useStand';
import ShaderGallery from '../Scenes/ShaderGallery';


import css from './canvas.css';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        <ShaderGallery toggle />
      </Canvas>
    </>
  );
};

export default ThreeCanvas;