import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

import Editor from './Editor';
import Gallery from './Gallery';
import css from '../../app.css';

function ThreeCanvas() {


  return (
    <>
      <Canvas className={css.Canvas}>
        <Stats />
        <Editor />
        {/* <Gallery /> */}
      </Canvas>
    </>
  );
};

export default ThreeCanvas;