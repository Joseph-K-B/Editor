
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

  const mesh = useStore((state) => state.mesh);
  const setMesh = useStore ((state) => state.setMesh);

  const handleShape = (v) => {
    mesh.geometry.shape = v
    setMesh({ ...mesh });
    console.log(geometry.shape)
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
        </>
       
  );
};

export default Controls;