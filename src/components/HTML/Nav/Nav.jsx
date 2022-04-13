import { NavLink } from "react-router-dom";
import { animated as a, useSpring } from "react-spring";

import { useStore } from "../../../hooks/useStand";


import css from './nav.css';


function Nav() {
  const darkMode = useStore((state) => state.darkMode);
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
        className={darkMode ? css.NavMenuDark : css.NavMenu }
      >
        <div
          className={css.NavMenuDiv}
        >
          <NavLink 
            className={css.link} 
            to='/'
          >
            <img 
              src='icons/nav/house_icon.png' 
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
              src='icons/nav/palette_icon.png' 
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
              src='icons/nav/pencil_icon.png' 
              alt='navigate-to-editor' 
            />
            Editor
          </NavLink>
          <span />
          <NavLink 
            className={css.link} 
            to='/particles'
            >
            <img
              className={css.galleryIcon}
              src='icons/nav/particles_icon.png' 
              alt='navigate-to-particles' 
            />
            Particles
          </NavLink>
          <NavLink 
            className={css.link} 
            to='/models'
            >
            <img
              className={css.galleryIcon}
              src='icons/nav/tree_icon.png' 
              alt='navigate-to-models' 
            />
            Models
          </NavLink>
        </div>
        <button 
          className={css.NavMenuButton} 
          onClick={handleToggle}
        >
          <img
            className={css.navToggleBtn} 
            src='icons/nav/hamburger_white.png' 
            alt='navigation-links'
          />
        </button>
      </a.section>
    </>
  );
};

export default Nav;