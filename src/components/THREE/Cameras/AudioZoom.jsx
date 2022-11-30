import { suspend } from "suspend-react";
import { useFrame } from '@react-three/fiber';
import createAudio from "../../../utils/createAudio";

function AudioZoom({ url }) {
  const { data } = suspend(() => createAudio(url), [url]);

  return useFrame((state) => {
    state.camera.fov = 25 - data.avg / 15
    state.camera.updateProjectionMatrix()
  });
};

export default AudioZoom;