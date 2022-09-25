import { useBox } from '@react-three/cannon';
import React from 'react';
import * as textures from '../textures'

type Props = {
  position: [x: number, y: number, z: number]
  texture: string
}

const Cube: React.FC<Props> = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position
  }))
  // @ts-ignore
  const activeTexture = textures[texture + "Texture"]
  console.log(activeTexture)
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
}

export { Cube };