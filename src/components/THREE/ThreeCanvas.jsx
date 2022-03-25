import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
;

import css from '../../app.css';

function ThreeCanvas() {


  return (
    <>
      <Canvas className={css.Canvas}>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeCanvas;