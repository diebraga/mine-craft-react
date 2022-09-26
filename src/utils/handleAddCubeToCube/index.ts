export const handleAddCubeToCube = (
  clickedFace: number,
  addCube: (x: number, y: number, z: number) => void,
  x: number, y: number, z: number
) => {
  if (clickedFace === 0) {
    addCube(x +1, y, z)
    return
  } else if (clickedFace === 1) {
    addCube(x -1, y, z)
    return
  } else if (clickedFace === 2) {
    addCube(x, y +1, z)
    return
  } else if (clickedFace === 3) {
    addCube(x, y - 1, z)
    return
  } else if (clickedFace === 4) {
    addCube(x, y, z + 1)
    return
  } else if (clickedFace === 5) {
    addCube(x, y, z - 1)
    return
  }
}