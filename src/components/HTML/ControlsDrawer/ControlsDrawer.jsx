import { useState } from "react";
import * as THREE from 'three';

import { animated as a, useSpring } from "react-spring";

import css from './controls-drawer.css';
import { useStore } from "../../../hooks/useStand";

/*starting with mesh controls to be refactored for light etc */

function ControlsDrawer(){
  const darkMode = useStore ((state) => state.darkMode);
  
  const geometry = useStore ((state) => state.geometry);
  const setGeometry = useStore ((state) => state.setGeometry);

  const rActive = useStore((state) => state.rActive);
  const setRActive = useStore((state) => state.setRActive);

  const rProps = useSpring({
    left: rActive ? window.innerWidth - 300 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  });

  const handleToggleRight = () => {
    setRActive(!rActive);
  }

    const handleShape = (v) => {
      geometry.shape = v
      setGeometry({ ...geometry });
      console.log(geometry.shape)
    }
    
    const handleColor= (e) => {
      geometry.color = e.target.value;
      setGeometry({ ...geometry });
    }

  return(
    <>
      <a.section className={css.rDrawer} style={rProps}>
        <div className={css.toggle}>
          <button className={css.tab} onClick={handleToggleRight}>
            { rActive ? 
                <img src={darkMode ? '/icons/arrows/white_R.png' : '/icons/arrows/black_R.png'} alt='open'/> : 
                <img  src={darkMode ? '/icons/arrows/white_L.png' : '/icons/arrows/black_L.png'} alt='close'/>  
            }          
          </button>
        </div>
        <div  className={rActive ? css.controls : css.hidden}>          
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cube')}>
            <div className={css.btn}>
              <img src='icons/geometry/material_icon.png'/>
              <label 
                htmlFor="material-menu" 
                aria-label="material-menu"
              >
                Materials
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('tetrahedron')}>
            <div className={css.btn}>
              <img src='icons/geometry/triangle_icon.png'/>
              <label 
                htmlFor="tetrahedron-geometry" 
                aria-label="tetrahedron-geometry"
              >
                Tetrahedron
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('sphere')}>
            <div className={css.btn}>
              <img src='icons/geometry/sphere_icon.png'/>
              <label 
                htmlFor="sphere-geometry" 
                aria-label="sphere-geometry"
              >
                Sphere
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('column')}>
            <div className={css.btn}>
              <img src='icons/geometry/column_icon.png'/>
              <label 
                htmlFor="column-geometry" 
                aria-label="column-geometry"
              >
                Torus
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('plane')}>
            <div className={css.btn}>
              <img src='icons/geometry/plane_icon.png'/>
              <label 
                htmlFor="plane-geometry" 
                aria-label="plane-geometry"
              >
                Plane
              </label>
            </div>
          </button>
        </div>
        <div  className={rActive ? css.controls : css.hidden}>
          <input type='color' onChange={(v) => handleColor(v)}/>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cube')}>
            <div className={css.btn}>
              <img src='icons/geometry/cube_icon.png'/>
              <label 
                htmlFor="cube-geometry" 
                aria-label="cube-geometry"
              >
                Cube
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('torus')}>
            <div className={css.btn}>
              <img src='icons/geometry/torus_icon.png'/>
              <label 
                htmlFor="torus-geometry" 
                aria-label="torus-geometry"
              >
                Torus
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('torusKnot')}>
            <div className={css.btn}>
              <img src='icons/geometry/knot_icon.png'/>
              <label 
                htmlFor="knot-geometry" 
                aria-label="knot-geometry"
              >
                Knot
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cone')}>
            <div className={css.btn}>
              <img src='icons/geometry/cone_icon.png'/>
              <label 
                htmlFor="cone-geometry" 
                aria-label="cone-geometry"
              >
                Cone
              </label>
            </div>
          </button>
        </div>
    </a.section>
    </>
  )
};

export default ControlsDrawer;