import { usePlane } from '@react-three/cannon';
import React from 'react';
import { groundTexture } from '../textures';

const Ground: React.FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))

  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture}/>
    </mesh>
  )
}

export { Ground };