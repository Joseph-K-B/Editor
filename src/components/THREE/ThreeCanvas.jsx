import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';

import { useStore } from '../../hooks/useStand';
import Editor from './Editor';
import Gallery from './Gallery';
import Landing from './Landing';
import css from '../../app.css';
import { useLocation, useNavigate } from 'react-router-dom';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);
  const location = useLocation();

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        { 
          location.pathname === '/gallery' ? <Gallery toggle/> : 
          location.pathname === '/editor' ? <Editor /> : 
          <Landing />          
        }
      </Canvas>
    </>
  );
};

export default ThreeCanvas;