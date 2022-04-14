import { useEffect, useRef } from 'react';
import * as THREE from 'three';


function useRandomAttribute() {
  const geoRef = useRef();

  useEffect(() => {
    if(geoRef.current) {
      const attributesCount = geoRef.current.attributes.position.count;
      const newRandomAttributes = new Float32Array(attributesCount)
      Math.random();
      for (let i = 0; i < attributesCount; i++)
      newRandomAttributes[i] = Math.random()
      geoRef.current.setAttribute('aRandom', new THREE.BufferAttribute(newRandomAttributes, 1));
    }
  }, [geoRef]);

  return geoRef
}

export { useRandomAttribute }