import { useEffect, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../../../hooks/useStand";

import css from './control-panel.css';

function ControlPanel() {
  const [active, setActive] = useState();
  const darkMode = useStore((state) => state.darkMode);
  
  const rActive = useStore((state) => state.rActive);
  
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);
  const meshControls = useStore ((state) => state.meshControls);
  const activeControls = useStore ((state) => state.activeControls);
  const activeInventory = useStore ((state) => state.activeInventory);
  const vectorOptions = useStore ((state) => state.vectorOptions);

  const setActiveInventory = useStore((state) => state.setActiveInventory);  
  const setActiveControls = useStore((state) => state.setActiveControls);  
  
  const props= useSpring({
    display: active ? 'block' : 'none',
  });
  
  const handleToggle = (v) => {
    active === v ? setActive(null) : setActive(v);
  }
  
  // const handleColor= (e) => {
    //   mesh.material.color = e.target.value;
    //   setMesh({ ...mesh });
    // }
    
    const handleChange= (e) => {
      activeControls === 'geoControls' ?
      mesh.geometry[e.target.id] = e.target.value
      : mesh.material[e.target.id] = e.target.value
      setMesh({ ...mesh });
      console.log(e.target)
  }

  const handleToggleInventory = (v) => {
    activeInventory ? setActiveInventory(null) : setActiveInventory(v)
  }

  const handlePrev = (e) => {
    setActiveControls(0)
  }

  return(
    <>
        <section 
          className={css.controlSection}
        >
          <div className={css.btn}>
          <button 
            className={darkMode ? css.darkBtn : css.btn} 
            onClick={handlePrev}
          >
            <img src='/icons/arrows/back_icon.svg'/>
            <label 
              htmlFor="previous-menu" 
              aria-label="previous-menu"
            />
          </button>
          </div>
        {meshControls[activeControls].inputs.map(input =>
            <>
              <label 
                htmlFor={`${input.label}-toggle`} 
                aria-label={`${input.label}-toggle`}
              >
                <button  
                  onClick={ () => 
                    input.key === 'inventory' ? 
                    handleToggleInventory(input.label) :
                    handleToggle(input.label) 
                }
                  className={rActive ? css.toggleBtn : css.hidden}
                >
                  {input.label}
                </button>
              </label> 
            <a.section 
              style={active === input.label ? props : null} 
              className={css.hidden}
            >
              <div className={css.yayCss}>
              <label 
                htmlFor={`${input.label}-input`} 
                aria-label={`${input.label}-input`}
                value = {`${input.label}`}
              />
                <div className={css.vectorOptions}>
                  {
                    input.dataType.includes('v')  ?
                    vectorOptions.inputs.map(input =>
                      <>
                        <label 
                          htmlFor={`${input.label}-vector-options`}
                          aria-label={`${input.label}-vector`}
                        >
                          {input.label}
                        <input
                            name='vectorInput' 
                            value={input.label}
                            type={input.type} 
                            onChange={(e) => console.log(e.target.value)}
                            id={`${input.label}-vector-options`}
                          />
                        </label>
                      </> 
                    ) : null
                  }
                </div>
                <input
                  id={input.value} 
                  type={input.type} 
                  className={darkMode ? css.controlDark : css.control} 
                  onChange={(v) => handleChange(v)}
                  min={input.type === 'range' ? 0.25 : null}
                  max={input.type === 'range' ? 10.0 : null}
                />
              </div>
            </a.section>
          </>
        )}
      </section>
    </>
    
  );
};

export default ControlPanel;