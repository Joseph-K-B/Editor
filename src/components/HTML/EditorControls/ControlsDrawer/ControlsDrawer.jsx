//Dependencies
import { animated as a, useSpring } from 'react-spring';
//Context Managment
import { useStore } from '../../../../hooks/useStand';
//Children
import ControlPanel from '../ControlPanels/ControlPanels';
import ControlMenu from '../ControlMenu/ControlMenu';
//Styles
import css from './controls-drawer.css';

function ControlsDrawer(){
  const darkMode = useStore ((state) => state.darkMode);

  const rActive = useStore((state) => state.rActive);
  const setRActive = useStore((state) => state.setRActive);

  const activeControls = useStore((state) => state.activeControls);

  const rProps = useSpring({
    left: rActive ? window.innerWidth - 300 : window.innerWidth - 20,
    top: window.innerHeight / 10
  });

  const handleToggle = () => {
    setRActive(!rActive);
  };

  return(
    <>
      <a.section className={css.rDrawer} style={rProps}>
        <div className={css.toggle}>
          <button className={css.tab} onClick={handleToggle}>
            { rActive ? 
              <img 
                src={darkMode ? '/icons/arrows/white_R.png' : '/icons/arrows/black_R.png'} 
                alt='open'
              /> : 
              <img  
                src={darkMode ? '/icons/arrows/white_L.png' : '/icons/arrows/black_L.png'} 
                alt='close'
              />  
            }          
          </button>
          </div>
            {
              activeControls.length > 0 ?
              <ControlPanel /> : <ControlMenu /> 
            }
      </a.section>
    </>
  )
};

export default ControlsDrawer;