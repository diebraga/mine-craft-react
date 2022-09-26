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
  addCube: (x: number, y: number, z: number) => void
}

export const useStore = create<Store>((set) => ({
  texture: "dirt",
  cubes: [],
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