import { useEffect } from "react";
import * as THREE from 'three';

function useDrag(active) {
  useEffect(() => {
    const vec = new THREE.Vector3();

    // const target = ref.current;
    if(!active) return;
    let previousOffset = { x: 0, y: 0 };
    let originMouseX;
    let originMouseY;
    function onMousemove(e) {
      const {pageX, pageY } = e;
      const x = pageX - originMouseX + previousOffset.x;
      const y = pageY - originMouseY + previousOffset.y;
      vec.set(x, y);
    }
    function onMouseDown(e) {
      originMouseY = e.pageX;
      originMouseY = e.pageY;
      window.addEventListener('mousemove', onMousemove);
      window.addEventListener('mouseup', onMouseup);
    }
    function onMouseup(e) {
      previousOffset.x += e.pageX - originMouseX;
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onMousemove);
      window.removeEventListener('mouseup', onMouseup);
    }
    // target.addEventListner('mousedown', onMouseDown);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMousemove);
      window.removeEventListener('mouseup', onMouseup);
    };
  }, []);
}

export default useDrag;