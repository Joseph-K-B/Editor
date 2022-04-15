import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";
import { Suspense, useEffect, useState } from "react";

import { useStore } from "../../hooks/useStand";

import ShadeGeo from "./Shaders/ShadeGeo";



function ShaderGallery({ toggle }) {
  const shaders = useStore((state) => state.shaders)
  const [scrollPages, setScrollPages] = useState(1);
  const [loading, setLoading] = useState();

  const { height, width} = useThree((state) => state.viewport);
  
  const handleReflow = (_, flexHeight) => setScrollPages(Math.ceil(flexHeight / height));
  
  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    loading ? <Html><h1>Loading...</h1></Html> :
    <ScrollControls pages={scrollPages} enabled={toggle}>
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
          <Box key={shade.id} centerAnchor margin={0.35} marginTop={1}>
            <Suspense fallback={null}>
              <ShadeGeo 
                l={3} 
                w={3} 
                fragment={shade.fragmentShader}
                gallery
                scale={1}
              />
            </Suspense>
          </Box>
        )}
        </Flex>
      </Scroll>
    </ScrollControls>
  );
};

export default ShaderGallery;