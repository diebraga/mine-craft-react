import { nanoid } from 'nanoid'
import create from 'zustand'

type Cube = {
  key: string
  pos: [x: number, y: number, z: number]
  texture: string
}

type Store = {
  texture: string,
  cubes: Cube[],
  removeCube: () => void
  setTexture: () => void
  saveWorld: () => void
  resetWorld: () => void
}

export const useStore = create<Store>((set) => ({
  texture: "dirt",
  cubes: [
    {
    key: nanoid(),
    pos: [2, 0.5, 0],
    texture: "dirt"
  },
  {
    key: nanoid(),
    pos: [5, 0.5, 0],
    texture: "wood"
  }
],
  removeCube: () => { },
  addCube: (x: number, y: number, z: number) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture
        },
      ]
    }))
  },
  setTexture: () => { },
  saveWorld: () => { },
  resetWorld: () => { }
}))