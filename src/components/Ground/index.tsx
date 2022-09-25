import { usePlane } from '@react-three/cannon';
import React from 'react';
import { groundTexture } from '../textures';
import * as three from "three";

// import { Container } from './styles';

const Ground: React.FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))

  groundTexture.wrapS = three.RepeatWrapping
  groundTexture.wrapT = three.RepeatWrapping
  groundTexture.repeat.set(100, 100)
  groundTexture.magFilter = three.NearestFilter

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture}/>
    </mesh>
  )
}

export { Ground };