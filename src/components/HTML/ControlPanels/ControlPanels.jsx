import { useEffect, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../../hooks/useStand";

import css from './control-panel.css';

function ControlPanel() {
  const [active, setActive] = useState();
  const darkMode = useStore((state) => state.darkMode);
  
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
                  input.dataType === 'v3' ?
                  vectorOptions.inputs.map(input =>
                    <>
                      <label 
                        htmlFor={`${input.label}-vector-options`}
                        aria-label={`${input.label}-vector`}
                        // className={css.vectorOptions}
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
                onClick={() => console.log('control')}
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
        {/* </section> */}
        
        {/* <input type='color' onChange={(v) => handleColor(v)}/> */}
        {/* <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cube')}>
          <div className={css.btn}>
            <img src='icons/geometry/material_icon.svg'/>
            <label 
              htmlFor="material-menu" 
              aria-label="material-menu"
            >
              Materials
            </label>
          </div>
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cube')}>
          <div className={css.btn}>
            <img src='icons/geometry/cube_icon.svg'/>
            <label 
              htmlFor="cube-geometry" 
              aria-label="cube-geometry"
            >
              Cube
            </label>
          </div>
        </button>
        <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cone')}>
          <div className={css.btn}>
            <img src='icons/geometry/cone_icon.svg'/>
            <label 
              htmlFor="cone-geometry" 
              aria-label="cone-geometry"
            >
              Cone
            </label>
          </div>
        </button>
      
        <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('torusKnot')}>
          <div className={css.btn}>
            <img src='icons/geometry/rope_icon.svg' />
            <label 
              htmlFor="knot-geometry" 
              aria-label="knot-geometry"
            >
              Knot
            </label>
          </div>
        </button>

      <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('torus')}>
        <div className={css.btn}>
          <img src='icons/geometry/donut_icon.svg' className={css.donutHole}/>
          <label 
            htmlFor="torus-geometry" 
            aria-label="torus-geometry"
          >
            Torus
          </label>
        </div>
      </button> */}
      </section>
    </>
    
  );
};

export default ControlPanel;