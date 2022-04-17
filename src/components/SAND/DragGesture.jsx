import { useState } from 'react';
import {animated as a, useSpring} from '@react-spring/three'
import { useThree } from '@react-three/fiber'
import { useDrag } from "react-use-gesture"
import { useStore } from '../../hooks/useStand';

function DragGesture() {
  const activeObject = useStore((state) => state.activeObject);
  const setActiveCamera = useStore ((state) => state.setActiveCamera);
  const setActiveObject = useStore ((state) => state.setActiveObject);


  const { viewport } = useThree()

  const { width, height, factor } = viewport
  const [spring, setSpring] = useSpring(() => ({ position: [0, 0, 0], scale: [1, 1, 1] }))


  const bind = useDrag(({ offset: [x, y] }) => activeObject ? setSpring({ position: [x, y, 0] }) : null, {
    bounds: { left: -width / 2, right: width / 2, top: -height / 2, bottom: height / 2 },
    rubberband: true,
    transform: ([x, y]) => [x / factor, -y / factor]
  })

  const handleToggleDrag = () => {
    setActiveCamera(false);
    setActiveObject(!activeObject)
  }

  return (
    <points count={1000}>
    <a.mesh {...bind()} {...spring} onClick={handleToggleDrag}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <pointsMaterial color="orange" />
    </a.mesh>
    </points>
  )
}

export default DragGesture;