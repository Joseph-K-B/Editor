import { Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import css from './canvas.css';

function AudioCanvas() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <Canvas className={darkMode ? css.CanvasDark : css.Canvas}>
        <Stats />
        <AudioScene toggle />
      </Canvas>
    </>
  )
}