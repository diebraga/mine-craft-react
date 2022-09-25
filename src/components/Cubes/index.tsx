import React from 'react';
import { useStore } from '../../hooks/useStore';
import { Cube } from '../Cube';

const Cubes: React.FC = () => {
  const [cubes] = useStore((state) => [
    state.cubes
  ])

  return (
    <>
      {cubes.map((cube) => {
        return (
          <Cube key={cube.key} position={cube.pos} texture={cube.texture} />
        )
      })}
    </>
  );
}

export { Cubes };