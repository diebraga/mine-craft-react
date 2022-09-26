import { usePlane } from '@react-three/cannon';
import React from 'react';
import { useStore } from '../../hooks/useStore';
import { groundTexture } from '../textures';

const Ground: React.FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const [addCube] = useStore((state) => [state.addCube])

  groundTexture.repeat.set(100, 100)

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        // @ts-ignore
        const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val))
        addCube(Number(x), Number(y), Number(z))
      }}
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}

export { Ground };