import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
;

import css from '../../app.css';
import DreiSelect from '../SAND/dreiSelect';
import Terrain from './Staging/Terrain';

function ThreeCanvas() {


  return (
    <>
      <Canvas className={css.Canvas}>
        <OrbitControls />
        <directionalLight 
          intensity={0.5}
        />
        <Terrain />
        <DreiSelect />
      </Canvas>
    </>
  );
};

export default ThreeCanvas;