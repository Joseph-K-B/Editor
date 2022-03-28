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
        <hemisphereLight
          color='blue' 
          intensity={0.15}
        />
        <directionalLight
          intensity={0.2}
        />
        <fog near={1} far={10} color='tan'/>
        <Terrain />
        <DreiSelect />
      </Canvas>
    </>
  );
};

export default ThreeCanvas;