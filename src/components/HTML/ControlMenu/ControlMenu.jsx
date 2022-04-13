import { animated as a, useSpring } from "react-spring";

import { useStore } from "../../../hooks/useStand";

import css from './control-menu.css';


function ControlMenu() {
  const darkMode = useStore((state) => state.darkMode);
  
  const rActive = useStore((state) => state.rActive);
  
  const mesh = useStore((state) => state.mesh);
  const meshControls = useStore ((state) => state.meshControls);
  const activeControls = useStore ((state) => state.activeControls);
  const setActiveControls = useStore ((state) => state.setActiveControls);
  const setMeshControls = useStore ((state) => state.setMeshControls);

  const props = useSpring({
    // left: activeControls === '' ? window.innerWidth : window.innerWidth - 345,
    // bottom: activeControls === '' ?  window.innerHeight : window.innerHeight - 275,
    display: 'none',
  })

  const propsTwo = useSpring({
    maxHeight: '0.5rem',
    top: 0,
  })

  const handleActiveControls = (e) => {
    setActiveControls(e);
    console.log(activeControls)
  };

  return(
    <>
        {meshControls.meshMenu.map((control, i) =>
          <a.div 
            className={css.btn} 
            style={activeControls && control.handler != activeControls ? props : propsTwo}>
            <button
              key= {i}
              value={control.handler} 
              className={darkMode ? css.controlDark : css.control} 
              onClick={(e) => handleActiveControls(control.handler)}
            >
              <img 
                src={`icons/${control.parent}/${control.name}/${control.name}_icon.svg`} 
                alt={control.name}
              />
              <label 
                htmlFor={`${control.name}-menu`} 
                aria-label={`${control.name}-menu`}            
              >
                {control.label}
              </label>
            </button>
          </a.div>
        )}
    </>    
  );
};

export default ControlMenu