

function ControlPanel() {
  const darkMode = useStore ((state) => state.darkMode);
  
  const rActive = useStore((state) => state.rActive);
  
  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);
  const meshControls = useStore ((state) => state.meshControls);

    
  const handleColor= (e) => {
    mesh.material.color = e.target.value;
    setMesh({ ...mesh });
  }

  return(
    <>
      <section className={rActive ? css.controls : css.hidden}>

        {meshControls.activeMenu.map( control =>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape(mesh.geometry)}>
          <div className={css.btn}>
            <img src={`icons/${control.name/control.name_icon.svg}`}/>
            <label 
              htmlFor={`${control.name-menu}`} 
              aria-label={`${control.name-menu}`}            
            >
              Materials
            </label>
          </div>
          </button>
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
      </section>
    </>
    
  );
};