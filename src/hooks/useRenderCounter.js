import { useRef } from "react";

/*
  @desc 
    Hook identifies number of times a component mounts.
      -Use solely in development not production.
      -ex: useRenderCounter('ComponentName')
        #further
          call functional component as 'label' argument
*/

function useRenderCounter(label) {
  const counter = useRef(0);
  counter.current++;
  console.log(`${label} rendered: ${counter.current}`)
  };

export default useRenderCounter;