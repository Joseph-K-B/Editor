import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

import { useStore } from '../../hooks/useStand';

import Editor from './Editor';
import Gallery from './Gallery';
import Landing from './Landing';
import ParticleScene from './Shaders/ParticleShaders/ParticleScene';

import css from '../../app.css';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);
  const location = useLocation();

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        { 
          location.pathname === '/gallery' ? <Gallery toggle /> : 
          location.pathname === '/editor' ? <Editor /> :
          location.pathname === '/particles' ? <ParticleScene /> :
          <Landing />          
        }
      </Canvas>
    </>
  );
};

export default ThreeCanvas;