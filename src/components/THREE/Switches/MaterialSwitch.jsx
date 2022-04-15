import { useEffect } from "react";

function MaterialSwitch({ name, color }) {

  return (
    <>
    {           
      name === 'Basic' ? 
        <meshBasicMaterial color={color}/> :
      name === 'Normal' ?
        <meshNormalMaterial color={color}/> :
      name === 'Standard' ?
        <meshStandardMaterial color={color}/> :
      name === 'Physical' ?
        <meshPhysicalMaterial color={color}/> :
      name === 'Phong' ?
        <meshPhongMaterial color={color}/> :
      name === 'Reflector' ?
        <meshReflectorMaterial color={color}/> :
        <meshBasicMaterial color={color}/>
    }
  </>
  );  
};

export default MaterialSwitch;



