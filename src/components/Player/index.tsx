import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { useKeyboard } from '../../hooks/useKeybord';

const JUMP_FORCE = 10

const Player: React.FC = () => {
  const actions = useKeyboard()
  console.log(Object.entries(actions as any).filter(([k, v]) => v))
  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0]
  }))

  // Player velocity
  const vel = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe((v) => vel.current = v)
  }, [api.velocity])

  // Player position
  const pos = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe((p) => pos.current = p)
  }, [api.position])

  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    if (actions.jump) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[0])
    }
  })
  return (
    <mesh ref={ref}></mesh>
  )
}

export { Player };