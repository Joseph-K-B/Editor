import { Select, Sphere } from "@react-three/drei";
import { useStore } from "../../hooks/useStand";


function DreiSelect() {
  const setSelection = useStore((state) => state.setSelection);
  const selection = useStore((state) => state.selection);
  const color = useStore((state) => state.color)

  return(
    <>
      <Select sphere multiple onChange={setSelection} >
        <Sphere onClick={() => console.log(selection)}>
          {/* <meshBasicMaterial color={color.headColor} wireframe/> */}
          <meshPhysicalMaterial 
            color={color.headColor} 
            // roughness={1}
            clearcoat={1}
            // clearcoatRoughness={1}
            metalness={1}
          />
        </Sphere>
        <Sphere onClick={() => console.log(selection)} position={[3, 0, 0]}>
          <meshBasicMaterial color={color.shoulderRColor} wireframe/>
        </Sphere>
        <Sphere onClick={() => console.log(selection)} position={[-3, 0, 0]}>
          <meshBasicMaterial color={color.shoulderLColor} wireframe/>
        </Sphere>
      </Select>
    </>
  );
};

export default DreiSelect