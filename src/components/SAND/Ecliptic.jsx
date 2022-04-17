import * as THREE from 'three';

function Ecliptic({ xRad, zRad, color}) {
  
  const points = [];
  for (let i = 0; i < 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    const x = xRad * Math.cos(angle);
    const z = zRad * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  };

  points.push(points[0]);

  const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line 
      geometry={lineGeo}
    >
      <lineBasicMaterial 
        color={color} 
        linewidth={1} 
      />
    </line>
  )
};

export default Ecliptic;