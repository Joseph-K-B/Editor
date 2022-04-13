import { useReducer } from "react";
import { useStore } from "../../../hooks/useStand"


function useGeometry() {
  const mesh = useStore((mesh) => mesh);
  // const [ref, dispatch] = useReducer();


  // useEffect(() => {    
  //   if(mesh.geometry.shape === 'plane') {
  //     console.log(mesh.geometry.shape)
  //   } else setLoading(false);     
  // }, [mesh]);


  switch ( action.type ) {
    case mesh.geometry.shape === 'plane' : {
      return (      
        <mesh>
        <planeBufferGeometry />
        <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
    case mesh.geometry.shape === 'sphere' : {
      return (      
        <mesh>
          <sphereBufferGeometry />
          <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
    case mesh.geometry.shape === 'cone' : {
      return (      
        <mesh>
          <coneBufferGeometry />
          <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
    case mesh.geometry.shape === 'icosahedron' : {
      return (      
        <mesh>
          <tetrahedronBufferGeometry />
          <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
    case mesh.geometry.shape === 'torus' : {
      return (      
        <mesh>
          <tetrahedronBufferGeometry />
          <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
    case mesh.geometry.shape === 'torus_knot' : {
      return (      
        <mesh>
          <torusKnotBufferGeometry 
            radius={3} 
            tube={4}
            radialSegments={10}            
            p={2}
            q={5}
          />
          <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
    default: {
      return (
        <mesh>
          <boxBufferGeometry />
          <meshBasicMaterial color={mesh.material.color} />
        </mesh>
      )
    }
  }
}
export default useGeometry;

