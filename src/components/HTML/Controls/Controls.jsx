
import { useStore } from '../../../hooks/useStand';
import css from './controls.css';

/*
  Controls should be split into two columns to reduce clutter and avoid repetive code
  they need toggle for different sections i.e, mesh would have material and geometry.
  Ideally use sub-menu as well.They should only be accessible when 
  there's an 'active' option chosen within left drawer.
  eventually state should be easily sent on POST route to server-side.
  from one key value pair all the way. 
*/

function Controls() {
  const darkMode = useStore ((state) => state.darkMode);
  const rActive = useStore((state) => state.rActive);    
  const geometry = useStore((state) => state.geometry);
  const setGeometry = useStore ((state) => state.setGeometry);

  const handleShape = (v) => {
    geometry.shape = v
    setGeometry({ ...geometry });
    console.log(geometry.shape)
  }
  
  const handleColor= (e) => {
    geometry.color = e.target.value;
    setGeometry({ ...geometry });
  }

  return(
    <>
      <div  className={rActive ? css.controls : css.hidden}>          

          <button className={darkMode ? css.controlDark : css.control} onClick={() => console.log('clicked')}>
            <div className={css.btn}>
              <img src='icons/arrows/back_icon.svg'/>
              <label 
                htmlFor="previous-menu" 
                aria-label="previous-menu"
              >
                Back
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('tetrahedron')}>
            <div className={css.btn}>
              <img src='icons/geometry/tetrahedron_icon.svg'/>
              <label 
                htmlFor="tetrahedron-geometry" 
                aria-label="tetrahedron-geometry"
              >
                Tetrahedron
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('sphere')}>
            <div className={css.btn}>
              <img src='icons/geometry/sphere_icon.svg'/>
              <label 
                htmlFor="sphere-geometry" 
                aria-label="sphere-geometry"
              >
                Sphere
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cylinder')}>
            <div className={css.btn}>
              <img src='icons/geometry/cylinder_icon.svg'/>
              <label 
                htmlFor="cylinder-geometry" 
                aria-label="cylinder-geometry"
              >
                Cylinder
              </label>
            </div>
          </button>
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('plane')}>
            <div className={css.btn}>
              <img src='icons/geometry/plane_icon.svg'/>
              <label 
                htmlFor="plane-geometry" 
                aria-label="plane-geometry"
              >
                Plane
              </label>
            </div>
          </button>
        </div>

        {/* ///////////////------------------------/////////////////////// */}


        <div  className={rActive ? css.controls : css.hidden}>
          {/* <input type='color' onChange={(v) => handleColor(v)}/> */}
          <button className={darkMode ? css.controlDark : css.control} onClick={() => handleShape('cube')}>
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
        </button>
        </div>
    </>
  );
};

export default Controls;