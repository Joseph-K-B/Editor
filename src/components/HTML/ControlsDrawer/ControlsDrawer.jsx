import { useState } from "react";
import * as THREE from 'three';

import { animated as a, useSpring } from "react-spring";

import css from './controls-drawer.css';
import { useStore } from "../../../hooks/useStand";
import Controls from "../Controls/Controls";

/*starting with mesh controls to be refactored for light etc */

function ControlsDrawer(){
  const darkMode = useStore ((state) => state.darkMode);

  const rActive = useStore((state) => state.rActive);
  const setRActive = useStore((state) => state.setRActive);

  const rProps = useSpring({
    left: rActive ? window.innerWidth - 300 : window.innerWidth -0.001,
    top: window.innerHeight / 10
  });

  const handleToggle = () => {
    setRActive(!rActive);
  }

  return(
    <>
      <a.section className={css.rDrawer} style={rProps}>
        <div className={css.toggle}>
          <button className={css.tab} onClick={handleToggle}>
            { rActive ? 
              <img 
                src={darkMode ? '/icons/arrows/white_R.png' : '/icons/arrows/black_R.png'} 
                alt='open'
              /> : 
              <img  
                src={darkMode ? '/icons/arrows/white_L.png' : '/icons/arrows/black_L.png'} 
                alt='close'
              />  
            }          
          </button>
        </div>
        <Controls />
    </a.section>
    </>
  )
};

export default ControlsDrawer;