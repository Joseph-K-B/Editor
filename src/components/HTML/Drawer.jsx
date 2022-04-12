import { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../hooks/useStand";

import * as THREE from 'three';

import css from '../../app.css';

function Drawer({ handlePosTwo, handlePosThree, handlePosFour }) {
  //Theme
  const darkMode = useStore ((state) => state.darkMode);
  const setDarkMode = useStore ((state) => state.setDarkMode);

  //Drawer Toggle
  const lActive = useStore((state) => state.lActive);
  const setLActive = useStore((state) => state.setLActive);
  const rActive = useStore((state) => state.rActive);
  const setRActive = useStore((state) => state.setRActive);

  //Object Select
  const selection = useStore((state) => state.selection);
  const setSelection = useStore((state) => state.setSelection);

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
            <img  src={darkMode ? '/pictures/white_L.png' : '/pictures/black_L.png'} /> : 
            <img src={darkMode ? '/pictures/white_R.png' : '/pictures/black_R.png'} alt='close'/>  
          }          
        </button>
      </div>
      <div  className={css.panel}>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => setDarkMode(!darkMode)}>
          <img src='pictures/light_icon.png'/>
        </button>
        <button className={darkMode ? css.controlDark : css.control}>
          2
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={handlePosThree}>
          3
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={handlePosFour}>
          4
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => console.log('testing 5')}>
          5
        </button>
      </div>
    </a.section>
    <a.section className={css.rDrawer} style={rProps}>
      <div className={css.toggle}>
        <button className={css.tab} onClick={handleToggleRight}>
          { rActive ? 
              <img src={darkMode ? '/pictures/white_R.png' : '/pictures/black_R.png'} /> : 
              <img  src={darkMode ? '/pictures/white_L.png' : '/pictures/black_L.png'}alt='close'/>  
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