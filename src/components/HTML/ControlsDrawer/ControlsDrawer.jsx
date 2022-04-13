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
        
    </a.section>
    </>
  )
};

export default ControlsDrawer;