import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

import { useStore } from '../../../hooks/useStand';

import Editor from '../Scenes/Editor';
import Landing from '../Scenes/Landing';

import css from './canvas.css';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);
  const location = useLocation();

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
          { location.pathname === '/editor' ? <Editor /> : <Landing /> }
      </Canvas>
    </>
  );
};

export default ThreeCanvas;