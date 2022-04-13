import { useEffect, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../../../hooks/useStand";

import css from './control-panel.css';

function ControlPanel() {
  const [active, setActive] = useState();
  const darkMode = useStore((state) => state.darkMode);
  const setInventoryActive = useStore((state) => state.setInventoryActive);  
  
  const rActive = useStore((state) => state.rActive);
  
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);
  const meshControls = useStore ((state) => state.meshControls);
  const activeControls = useStore ((state) => state.activeControls);
  const vectorOptions = useStore ((state) => state.vectorOptions);

  const props= useSpring({
    display: active ? 'block' : 'none',
  });

  const handleToggle = (v) => {
    active === v ? setActive(null) : setActive(v);
    console.log(active)
  }
    
  const handleColor= (e) => {
    mesh.material.color = e.target.value;
    setMesh({ ...mesh });
  }

  const handleToggleInventory = (v) => {
    setInventoryActive(v)
  }

  return(
    <>
        <section 
          className={css.controlSection}
        >
        {meshControls[activeControls].inputs.map(input =>
            <>
              <label 
                htmlFor={`${input.label}-toggle`} 
                aria-label={`${input.label}-toggle`}
              >
                <button  
                  onClick={() => handleToggle(input.label)}
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
                  type={input.type} 
                  className={darkMode ? css.controlDark : css.control} 
                  onClick={(v) => handleToggleInventory(input.label)}
                  id={`${input.label}-input`}
                />
                <img 
                  src={`icons/${meshControls[activeControls].parent}/${meshControls[activeControls].name}/${input.icon}_icon.svg`} 
                  alt={input.label}
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