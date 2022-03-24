import { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../hooks/useStand";

import css from '../../app.css';

function Drawer({ handlePosTwo, handlePosThree, handlePosFour }) {
  const selection = useStore((state) => state.selection);
  const [lActive, setLActive] = useState(false);
  const [rActive, setRActive] = useState(false);
  
  const props = useSpring({
    right: lActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  })
  
  const rProps = useSpring({
    left: rActive ? window.innerWidth - 200 : window.innerWidth - 0.001,
    top: window.innerHeight / 10
  })
  
  const handleToggleLeft = () => {
    setLActive(v => !v);
    console.log(lActive, 'left drawer')
  }
  
  const handleToggleRight = () => {
    setRActive(v => !v);
    console.log(rActive, 'right drawer')
  }
  
  const handleSelect = () => {
    console.log(selection[0].material.color)
  }

  return(
    <>
    <a.section className={css.drawer} style={props}>
      <div className={css.toggle}>
      <button className={css.tab} onClick={handleToggleLeft}>
          { lActive ? 
              <img  src='/pictures/white_L.png' /> : 
              <img src='/pictures/white_R.png' alt='close'/>  
          }          
        </button>
      </div>
      <div  className={css.panel}>
        <button className={css.control} onClick={handleSelect}>
          1
        </button>
        <button className={css.control} onClick={handlePosTwo}>
          2
        </button>
        <button className={css.control} onClick={handlePosThree}>
          3
        </button>
        <button className={css.control} onClick={handlePosFour}>
          4
        </button>
        <button className={css.control} onClick={() => console.log('testing 5')}>
          5
        </button>
      </div>
    </a.section>
    <a.section className={css.rDrawer} style={rProps}>
      <div className={css.toggle}>
        <button className={css.tab} onClick={handleToggleRight}>
          { rActive ? 
              <img src='/pictures/white_R.png' /> : 
              <img  src='/pictures/white_L.png'alt='close'/>  
          }          
        </button>
      </div>
      <div  className={css.panel}>
        <button className={css.control} onClick={() => console.log('testing 1')}>
          1
        </button>
        <button className={css.control} onClick={() => console.log('testing 2')}>
          1
        </button>
        <button className={css.control} onClick={() => console.log('testing 3')}>
          1
        </button>
        <button className={css.control} onClick={() => console.log('testing 4')}>
          1
        </button>
        <button className={css.control} onClick={() => console.log('testing 5')}>
          1
        </button>
      </div>
    </a.section>
    </>
  );
};

export default Drawer;