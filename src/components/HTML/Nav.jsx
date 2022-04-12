import { NavLink } from "react-router-dom";
import { animated as a, useSpring } from "react-spring";

import { useStore } from "../../hooks/useStand";


import css from '../../app.css';


function Nav() {
  const navActive = useStore((state) => state.navActive);
  const setNavActive = useStore((state) => state.setNavActive);

  const props = useSpring({
    left: navActive ? window.innerWidth - 345 : window.innerWidth - 90,
    bottom: navActive ? window.innerHeight - 275 : window.innerHeight - 65
  })

  const handleToggle = () => {
    setNavActive(!navActive)
    console.log(navActive);
  }

  return (
    <>
      <a.section
        style={props}
        className={css.NavMenu}
      >
        <div>
          <NavLink 
            className={css.link} 
            to='/'
          >
            <img 
              src='pictures/white_home_icon.png' 
              alt='navigate-home'
              className={css.homeIcon} 
              />
            <p>Home</p>
          </NavLink>
          <NavLink 
            className={css.link} 
            to='/gallery'
          >
             
            <img
              className={css.galleryIcon}
              src='pictures/palette_icon.png' 
              alt='navigate-to-gallery' 
            />
            <p>Gallery</p>
          </NavLink>
          <NavLink 
            className={css.link} 
            to='/editor'
            >
            <img
              className={css.galleryIcon}
              src='pictures/editor_icon.webp' 
              alt='navigate-to-editor' 
            />
            Editor
          </NavLink>
          <span />
          <NavLink 
            className={css.link} 
            to='/editor'
            >
            <img
              className={css.galleryIcon}
              src='pictures/editor_icon.webp' 
              alt='navigate-to-editor' 
            />
            T.B.D
          </NavLink>
          <NavLink 
            className={css.link} 
            to='/editor'
            >
            <img
              className={css.galleryIcon}
              src='pictures/editor_icon.webp' 
              alt='navigate-to-editor' 
            />
            T.B.D
          </NavLink>
        </div>
        <button onClick={handleToggle}>
          <img
            className={css.navToggleBtn} 
            src='pictures/hamburger_white.png' 
            alt='navigation-links'
          />
        </button>
      </a.section>
    </>
  );
};

export default Nav;