import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, SpotLight, Stats } from '@react-three/drei';
;

import css from '../../app.css';
import DreiSelect from '../SAND/dreiSelect';
import Terrain from './Staging/Terrain';

function ThreeCanvas() {


  return (
    <>
      <Canvas className={css.Canvas}>
        <Stats />
        <OrbitControls />
        {/* <directionalLight 
          intensity={0.5}
        />
        <SpotLight position={[0, 5, 0]}/>
        <SpotLight position={[-3, 5, 0]} look/>
        <SpotLight position={[3, 5, 0]}/>
        <Terrain />
        <DreiSelect /> */}
      </Canvas>
    </>
  );
};

export default ThreeCanvas;