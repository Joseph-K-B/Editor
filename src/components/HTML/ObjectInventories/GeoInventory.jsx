import { useStore } from "../../../hooks/useStand";

import { animated as a, useSpring } from "react-spring";

import css from './inventory.css';
import { useEffect, useReducer, useState } from "react";


function GeoInventory(){
  const [loading, setLoading] = useState(true);
  const darkMode = useStore((state) => state.darkMode);
  const inventoryActive = useStore((state) => state.inventoryActive);
  const setInventoryActive = useStore((state) => state.setInventoryActive); 
  
  
  const meshControls = useStore((state) => state.meshControls);
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);

  const props = useSpring({
    right: inventoryActive ? window.innerWidth - 100 : window.innerWidth - 90,
    top: inventoryActive ? window.innerHeight - 750 : window.innerHeight - 65
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
      <a.section className={css.inventory} style={inventoryActive ? props : null}>
        <button onClick={() => setInventoryActive(false)}>
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
        <button onClick={() => setInventoryActive(false)}>
          Toggle
        </button>
      </a.section>
    </>
  );
};

export default GeoInventory