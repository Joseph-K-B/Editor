import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

import { useStore } from '../../hooks/useStand';
import Editor from './Editor';
import Gallery from './Gallery';
import css from '../../app.css';

function ThreeCanvas() {
  const darkMode = useStore((state) => state.darkMode);


  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        <Editor />
        {/* <Gallery /> */}
      </Canvas>
    </>
  );
};

export default ThreeCanvas;