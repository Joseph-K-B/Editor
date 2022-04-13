

function geoReducer(geometry, action) {
  switch ( action.type ) {
    case 'plane' : {
      return <meshPlaneMaterial />
    }

    case 'cube' : {
      return <boxBufferGeometry />
    }
    case 'sphere' : {
      return <boxBufferGeometry />
    }
    case 'cone' : {
      return <boxBufferGeometry />
    }
    case 'column' : {
      return <boxBufferGeometry />
    }
    case 'torus' : {
      return <boxBufferGeometry />
    }
    case 'torus_knot' : {
      return <torusKnotGeometry
        radius={3} 
        tube={4}
        radialSegments={10}            
        p={2}
        q={5}
      />
    }
    default: {
      throw new Error('unable to fulfill your request, this could be a discrepancy with your inputs')
    }
  };
};

export default geoReducer;