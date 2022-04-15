import { useStore } from "../../../hooks/useStand";

import { animated as a, useSpring } from "react-spring";

import css from './inventory.css';
import { useEffect, useReducer, useState } from "react";


function GeoInventory(){
  const [setLoading] = useState(true);
  const darkMode = useStore((state) => state.darkMode);

  const activeInventory = useStore((state) => state.activeInventory);
  const setActiveInventory = useStore((state) => state.setActiveInventory); 
  
  
  const meshControls = useStore((state) => state.meshControls);
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);

  const props = useSpring({
    right: activeInventory ? window.innerWidth - 220 : window.innerWidth - 220,
    top: activeInventory ? window.innerHeight - 750 : window.innerHeight
  });

  useEffect(() => {
    setLoading(false)
  }, []);

  const handleShape = (v) => {
    mesh.geometry.shape = v
    setMesh({ ...mesh });
  }

  const shapes = meshControls.shapes;

  return (
    <>
      <a.section 
        className={css.inventory} 
        style={props}
      >
        <button onClick={() => setActiveInventory(null)}>
          Toggle
        </button>
        {shapes.map((shape, i) => 
          <div className={darkMode ? css.selectionDark : css.selection}  key={i}>
            <button 
              className={css.btn} 
              onClick={() => handleShape(shape)}
            >
              <img src={`/icons/mesh/geometry/${shape}_icon.svg`} />
              <label 
                htmlFor="${shape}-geometry" 
                aria-label="${shape}-geometry"
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </button>
          </div>
          )
        }
        <div>
          <img src=''/>
          <button onClick={() => setActiveInventory(null)}>
            Toggle
          </button>
        </div>
      </a.section>
    </>
  );
};

export default GeoInventory