import * as THREE from 'three';
import { useEffect } from 'react';
import { suspend } from 'suspend-react';

import createAudio from '../../../utils/createAudio';
import { useRef } from 'react';

function Track({ url, y = 2500, space = 1.8, width = 0.01, height = 0.05, obj = new THREE.Object3D(), ...props}) {
  const ref = useRef();
  const { gain, ctx, update, data } = suspend(() => createAudio(url), [url]);

  useEffect(() => {
    gain.connect(ctx.destination)
    return () => gain.disconnect()
  }, [gain, context]);

  useFrame(() => {
    let avg = update()

    for (let i = 0; i < data.length; i++) {
      obj.position.set(i * width * space - (data.length * width * space) / 2, data[i] / y, 0)
      obj.updateMatrix()
      ref.current.setMatrixAt(i, obj.matrix)
    }
    ref.current.material.color.setHSL(avg / 500, 0.75, 0.75)
    ref.current.instanceMatrix.needsUpdate = true
  });

  return (
    <instancedMesh castShadow ref = {ref} args={[null, null, data.length]} {...props}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  )
};

export default Track