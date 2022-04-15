import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

import { useStore } from '../../../hooks/useStand';

import Editor from '../Editor';
import Landing from '../Landing';
import ParticleScene from '../Shaders/ParticleShaders/ParticleScene';

import css from './canvas.css';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);
  const location = useLocation();

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
      <OrbitControls />

        <Stats />
        { 
          location.pathname === '/gallery' ? <Gallery toggle /> : 
          location.pathname === '/editor' ? <Editor /> :
          location.pathname === '/particles' ? <ParticleScene grass/> :
          <Landing />          
        }
      </Canvas>
    </>
  );
};

export default ThreeCanvas;