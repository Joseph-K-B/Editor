import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, Select, Sphere, useSelect } from '@react-three/drei';
import { useStore } from '../../hooks/useStand';

import css from '../../app.css';

function ThreeCanvas() {
  const setSelection = useStore((state) => state.setSelection);
  const selection = useStore((state) => state.selection);

  return (
    <>
      <Canvas className={css.Canvas}>
        <OrbitControls />
        <Plane args={[100, 100, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <meshBasicMaterial color='tan' />
        </Plane>
        <Select sphere multiple onChange={setSelection} >
          <Sphere onClick={() => console.log(selection)}>
            <meshBasicMaterial color='blue' wireframe/>
          </Sphere>
        </Select>
      </Canvas>
    </>
  );
};

export default ThreeCanvas;

function Foo() {
  const selected = useSelect().map((sel) => sel.userData.store)

  return(
    <Sphere onClick={(obj) => console.log(obj.object.material)}>
      <meshBasicMaterial color='blue' wireframe/>
    </Sphere>
  )
}