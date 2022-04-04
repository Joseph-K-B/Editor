import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";
import { Suspense, useEffect, useState } from "react";
import { useStore } from "../../hooks/useStand";

import ShadeGeo from "./Shaders/ShadeGeo";



function Gallery() {
  const shaders = useStore((state) => state.shaders)
  const { height, width} = useThree((state) => state.viewport);
  const [scrollPges, setScrollPages] = useState(1);
  const [loading, setLoading] = useState();
  const handleReflow = (_, flexHeight) => setScrollPages(Math.ceil(flexHeight / height));



  
  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    loading ? <Html><h1>Loading...</h1></Html> :
    <ScrollControls pages={scrollPges}>
      <Scroll>
        <Flex
          size={[width, height, 0]}
          position={[-width / 2, height / 2, 0]}
          dir='row'
          justify='center'
          wrap='wrap'
          padding={0.5}
          onReflow={handleReflow}
        >
        {shaders.map(shade => 
          <Box key={shade.id} centerAnchor margin={0.25}>
            <Suspense fallback={null}>
              <ShadeGeo 
                l={3} 
                w={3} 
                fragment={shade.fragementShader}
                gallery 
              />
            </Suspense>
          </Box>
        )}
        </Flex>
      </Scroll>
    </ScrollControls>
  );
};

export default Gallery;