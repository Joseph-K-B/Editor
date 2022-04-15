import { useStore } from "../../../hooks/useStand";

import { animated as a, useSpring } from "react-spring";

import css from './inventory.css';
import { useEffect, useReducer, useState } from "react";


function GeoInventory(){
  const [loading, setLoading] = useState(true);
  const darkMode = useStore((state) => state.darkMode);
  const activeInventory = useStore((state) => state.activeInventory);
  const setActiveInventory = useStore((state) => state.setActiveInventory); 
  
  
  const meshControls = useStore((state) => state.meshControls);
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);

  const props = useSpring({
    right: activeInventory ? window.innerWidth - 100 : window.innerWidth - 90,
    top: activeInventory ? window.innerHeight - 750 : window.innerHeight - 65
  })

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
      <a.section className={css.inventory} style={activeInventory ? props : null}>
        <button onClick={() => setActiveInventory(null)}>
          Toggle
        </button>
        {shapes.map((shape) => 
            <button 
              className={darkMode ? css.selectionDark : css.selection} 
              onClick={() => handleShape(shape)}
            >
            <div className={css.btn}>
              <img src={`/icons/mesh/geometry/${shape}_icon.svg`} />
              <label 
                htmlFor="${shape}-geometry" 
                aria-label="${shape}-geometry"
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </div>
          </button>
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