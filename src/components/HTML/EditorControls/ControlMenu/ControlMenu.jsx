import { animated as a, useSpring } from "react-spring";

import { useStore } from "../../../../hooks/useStand";

import css from './control-menu.css';


function ControlMenu() {
  const darkMode = useStore((state) => state.darkMode);
  
  const rActive = useStore((state) => state.rActive);

  const meshControls = useStore ((state) => state.meshControls);
  const activeControls = useStore ((state) => state.activeControls);
  const setActiveControls = useStore ((state) => state.setActiveControls);


  const props = useSpring({
    display: 'none',
  })

  const handleActiveControls = (v) => {
    setActiveControls(v);
  };

  return(
  <>   
      <section className={css.controlMenu}>
        {meshControls.meshMenu.map((control, i) =>
          <a.div
            key= {i} 
            className={rActive ? css.control : css.hidden} 
            style={activeControls && control.handler != activeControls ? props : null}>
            <button              
              value={control.handler} 
              className={darkMode ? css.darkBtn : css.btn} 
              onClick={() => handleActiveControls(control.handler)}
            >
              <img 
                src={`/icons/${control.parent}/${control.name}/${control.name}_icon.svg`} 
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
      </section>
    </>    
  );
};

export default ControlMenu