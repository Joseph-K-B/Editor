import { useEffect, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import { useStore } from "../../../hooks/useStand";

import css from './control-panel.css';

function ControlPanel() {
  const [active, setActive] = useState(false);
  const darkMode = useStore((state) => state.darkMode);
  
  const rActive = useStore((state) => state.rActive);
  
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);
  const meshControls = useStore ((state) => state.meshControls);
  const activeControls = useStore ((state) => state.activeControls);

  const props= useSpring({
    display: active ? 'block' : 'none',
  });
  const hide = useSpring({
    display: 'none',
  });

  useEffect(() => {
    console.log(meshControls[activeControls]);
  }, []);

  const handleToggle = (e) => {
    console.log(e.target.value);
  }
    
  const handleColor= (e) => {
    mesh.material.color = e.target.value;
    setMesh({ ...mesh });
  }

  return(
    <>
      {/* <section className={rActive ? css.controls : css.hidden}> */}
        {meshControls[activeControls].inputs.map(input =>
          <a.section 
            className={css.btn}
            key={input.key}
          >
            <label 
              htmlFor={`${input.name}-input`} 
              aria-label={`${input.name}-input`}
              value = {`${input.name}`}
            >
            <button value = {`${input.name}`} onClick={(e) => handleToggle(e)}>
                {input.label}
              </button>
            <a.div style={active === `${input.name}` ? props : hide}>
              <input
                type={input.type} 
                className={darkMode ? css.controlDark : css.control} 
                onClick={() => console.log('control')}
                id={`${input.name}-input`}
              />
              <img 
                src={`icons/${meshControls[activeControls].parent}/${meshControls[activeControls].name}/${input.icon}_icon.svg`} 
                alt={input.name}
              />
              </a.div>
            </label>
          </a.section>
        )}
        
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
      {/* </section> */}
    </>
    
  );
};

export default ControlPanel;