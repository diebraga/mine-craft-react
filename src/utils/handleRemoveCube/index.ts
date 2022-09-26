import { ThreeEvent } from "@react-three/fiber";

export const handleRemoveCube = (
  e: ThreeEvent<MouseEvent>,
  x: number, y: number, z: number,
  removeCube: (x: number, y: number, z: number) => void,
) => {
  // @ts-ignore
  if (e.shiftKey) {
    removeCube(x, y, z)
    return;
  }
}