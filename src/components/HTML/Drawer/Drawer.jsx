import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../../hooks/useStand";

import * as THREE from 'three';

import css from './drawer.css';

function Drawer() {
  //Theme
  const darkMode = useStore ((state) => state.darkMode);
  const setDarkMode = useStore ((state) => state.setDarkMode);

  //Grid
  const grid = useStore ((state) => state.grid);
  const setGrid = useStore ((state) => state.setGrid);

  //Drawer Toggle
  const lActive = useStore((state) => state.lActive);
  const setLActive = useStore((state) => state.setLActive);
  const activeInventory = useStore((state) => state.activeInventory);

  
  const props = useSpring({
    right: lActive ? window.innerWidth - 200 : window.innerWidth - 0,
    top: window.innerHeight / 10
  })
  

  
  const handleToggleLeft = () => {
    setLActive(!lActive);
  }

  const handleToggleGrid = () => {
    setGrid(!grid);
  }

  return(
    <>
    <a.section className={activeInventory ? css.hidden : css.drawer} style={props}>
      <div className={css.toggle}>
      <button className={css.tab} onClick={handleToggleLeft}>
          { lActive ? 
            <img  src={darkMode ? '/icons/arrows/white_L.png' : '/icons/arrows/black_L.png'} /> : 
            <img src={darkMode ? '/icons/arrows/white_R.png' : '/icons/arrows/black_R.png'} alt='close'/>  
          }          
        </button>
      </div>
      <div  className={css.panel}>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={() => setDarkMode(!darkMode)}
        >
          <img src={darkMode ? '/icons/theme/sun_icon.png' : '/icons/theme/moon_icon.png'}/>
          <p>Theme</p>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control}
          onClick={() => handleShape('cube')}
          >
          <img src='/icons/mesh/mesh_icon.svg'/>
          <p>Mesh</p>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={() => handleShape('cube')}
          >
          <img src='/icons/camera/camera_icon.png'/>
          <p>Camera</p>
        </button>
        <button 
          className={darkMode ? css.controlDark : css.control} 
          onClick={() => handleShape('sphere')}
          >
          <img src='/icons/lights/lights_icon.png'/>
          <p>Lights</p>
        </button>
        <button
          id='grid-toggle' 
          className={darkMode ? css.controlDark : css.control} 
          onClick={handleToggleGrid}
        >
          <div className={css.btn}>
            <img src='/icons/grid/grid_icon.svg'/>
            <label 
              htmlFor="grid-toggle" 
              aria-label="grid-toggle"
            >
              Grid
            </label>
          </div>
        </button>
      </div>
    </a.section>

    </>
  );
};

export default Drawer;