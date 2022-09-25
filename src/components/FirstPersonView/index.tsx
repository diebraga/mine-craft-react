import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React from 'react';

const FirstPersonView: React.FC = () => {
  const { camera, gl } = useThree()
  // @ts-ignore
  return <PointerLockControls args={[camera, gl.domElement]} />
}

export { FirstPersonView };