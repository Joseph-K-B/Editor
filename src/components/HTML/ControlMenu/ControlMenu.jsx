import { useStore } from "../../../hooks/useStand";

import css from './control-menu.css';


function ControlMenu() {
  const darkMode = useStore((state) => state.darkMode);
  
  const rActive = useStore((state) => state.rActive);
  
  const mesh = useStore((state) => state.mesh);
  const meshControls = useStore ((state) => state.meshControls);
  const setMeshControls = useStore ((state) => state.setMeshControls);

  const handleMeshControls = (e) => {
    meshControls.activeControls = e;
    setMeshControls({ ...meshControls });
    console.log(meshControls)
  };

  return(
    <>
      <section className={rActive ? css.controls : css.hidden}>
        {meshControls.meshMenu.map((control, i) =>
          <button
            key= {i}
            value={control.handler} 
            className={darkMode ? css.controlDark : css.control} 
            onClick={(e) => handleMeshControls(control.handler)}
          >
          <div className={css.btn}>
            <img 
              src={`icons/${control.parent}/${control.name}/${control.name}_icon.svg`} 
              alt={control.name}
            />
            <label 
              htmlFor={`${control.name}-menu`} 
              aria-label={`${control.name}-menu`}            
            >
              Materials
            </label>
          </div>
          </button>
        )}
      </section>
    </>    
  );
};

export default ControlMenu