import {animated as a, useSpring} from '@react-spring/three'
import { useThree } from '@react-three/fiber'
import { useDrag } from "react-use-gesture"
import { useStore } from '../../hooks/useStand';

function DragGesture() {
  const activeCamera = useStore((state) => state.activeCamera);
  const setActiveCamera = useStore ((state) => state.setActiveCamera);


  const { viewport } = useThree()

  const { width, height, factor } = viewport
  const [spring, setSpring] = useSpring(() => ({ position: [0, 0, 0], scale: [1, 1, 1] }))


  const bind = useDrag(({ offset: [x, y] }) => setSpring({ position: [x, y, 0] }), {
    // bounds are expressed in canvas coordinates!
    bounds: { left: -width / 2, right: width / 2, top: -height / 2, bottom: height / 2 },
    rubberband: true,
    transform: ([x, y]) => [x / factor, -y / factor]
  })

  const handleToggleCamera = () => {
    setActiveCamera(false);
  }

  return (
    <a.mesh {...bind()} {...spring} onClick={handleToggleCamera}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="orange" />
    </a.mesh>
  )
}

export default DragGesture;