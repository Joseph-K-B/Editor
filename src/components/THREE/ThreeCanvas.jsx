import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

import { useStore } from '../../hooks/useStand';
import Editor from './Editor';
import Gallery from './Gallery';
import Landing from './Landing';
import css from '../../app.css';
import { useLocation } from 'react-router-dom';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);
  const location = useLocation();

  console.log(location)

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        { 
          location.pathname === '/gallery' ? <Gallery /> : 
          location.pathname === '/editor' ? <Editor /> : 
          <Landing />
          
        }
      </Canvas>
    </>
  );
};

export default ThreeCanvas;