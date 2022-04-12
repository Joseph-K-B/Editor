import { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../hooks/useStand";

import * as THREE from 'three';

import css from '../../app.css';

function Drawer() {
  //Theme
  const darkMode = useStore ((state) => state.darkMode);
  const setDarkMode = useStore ((state) => state.setDarkMode);

  //Grid
  const grid = useStore ((state) => state.grid);
  const setGrid = useStore ((state) => state.setGrid);


  const geometry = useStore ((state) => state.geometry);
  const setGeometry = useStore ((state) => state.setGeometry);

  //Drawer Toggle
  const lActive = useStore((state) => state.lActive);
  const setLActive = useStore((state) => state.setLActive);
  const rActive = useStore((state) => state.rActive);
  const setRActive = useStore((state) => state.setRActive);

  //Color Select
  const setColor = useStore((state) => state.setColor);

  //Particle Count
  const particleState = useStore((state) => state.particles);
  const setParticles = useStore((state) => state.setParticles);

  
  const props = useSpring({
    right: lActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  })
  
  const rProps = useSpring({
    left: rActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  })
  
  const handleToggleLeft = () => {
    setLActive(!lActive);
  }
  
  const handleToggleRight = () => {
    setRActive(!rActive);
  }

  const handleToggleGrid = () => {
    setGrid(!grid);
  }

  const handleShape = (v) => {
    geometry.shape = v
    setGeometry({ ...geometry });
  }

  const handleInsideColor = (e) => {
    particleState.insideColor = new THREE.Color(e.target.value);
    setParticles({...particleState});
    console.log(particleState);
  }
  const handleOutsideColor = (e) => {
    particleState.outsideColor = new THREE.Color(e.target.value);
    setParticles({...particleState});
    console.log(particleState);
  }

  return(
    <>
    <a.section className={css.drawer} style={props}>
      <div className={css.toggle}>
      <button className={css.tab} onClick={handleToggleLeft}>
          { lActive ? 
            <img  src={darkMode ? '/icons/white_L.png' : '/icons/black_L.png'} /> : 
            <img src={darkMode ? '/icons/white_R.png' : '/icons/black_R.png'} alt='close'/>  
          }          
        </button>
      </div>
      <div  className={css.panel}>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={() => setDarkMode(!darkMode)}
        >
          <img src='icons/light_icon.png'/>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control}
          onClick={() => handleShape('cube')}
        >
          <img src='icons/geometry/shapes_icon.png'/>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={() => handleShape('cube')}
        >
          <img src='icons/geometry/cube_icon.png'/>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={() => handleShape('sphere')}
        >
          <img src='icons/geometry/circle_icon.png'/>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={handleToggleGrid}
        >
          <img src='icons/grid_icon.png'/>
        </button>
      </div>
    </a.section>
    <a.section className={css.rDrawer} style={rProps}>
      <div className={css.toggle}>
        <button className={css.tab} onClick={handleToggleRight}>
          { rActive ? 
              <img src={darkMode ? '/icons/white_R.png' : '/icons/black_R.png'} /> : 
              <img  src={darkMode ? '/icons/white_L.png' : '/icons/black_L.png'}alt='close'/>  
          }          
        </button>
      </div>
      <div  className={css.panel}>
        <input type='color' onChange={handleInsideColor}/>
        <input type='color' onChange={handleOutsideColor}/>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => console.log(particleState)}>
          1
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => console.log('testing 3')}>
          1
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => console.log('testing 4')}>
          1
        </button>
      </div>
    </a.section>
    </>
  );
};

export default Drawer;