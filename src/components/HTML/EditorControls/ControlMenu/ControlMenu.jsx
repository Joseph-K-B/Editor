import { animated as a, useSpring } from "react-spring";

import { useStore } from "../../../../hooks/useStand";

import css from './control-menu.css';


function ControlMenu() {
  const darkMode = useStore((state) => state.darkMode);
  

  const meshControls = useStore ((state) => state.meshControls);
  const activeControls = useStore ((state) => state.activeControls);
  const setActiveControls = useStore ((state) => state.setActiveControls);

  const props = useSpring({
    display: 'none',
  })

  const handleActiveControls = (e) => {
    setActiveControls(e);
  };

  const handlePrev = (e) => {
    console.log(meshControls, activeControls)
  }


  return(
  <>   
      <section className={css.controlMenu}>
        {meshControls.meshMenu.map((control, i) =>
          <a.div 
            className={css.control} 
            style={activeControls && control.handler != activeControls ? props : null}>
            <button
              key= {i}
              value={control.handler} 
              className={darkMode ? css.darkBtn : css.btn} 
              onClick={(e) => handleActiveControls(control.handler)}
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
        {
          activeControls ?
            <button 
              className={darkMode ? css.darkBtn : css.btn} 
              onClick={handlePrev}
            >
              <div className={css.btn}>
                <img src='/icons/arrows/back_icon.svg'/>
                <label 
                  htmlFor="previous-menu" 
                  aria-label="previous-menu"
                >
                  Back
                </label>
              </div>
            </button> : null
        }
      </section>
    </>    
  );
};

export default ControlMenu