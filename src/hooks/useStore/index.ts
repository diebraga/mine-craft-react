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
  removeCube: (x: number, y: number, z: number) => void
  setTexture: (texture: string) => void
  saveWorld: () => void
  resetWorld: () => void
  addCube: (x: number, y: number, z: number) => void
}

export const useStore = create<Store>((set) => ({
  texture: "dirt",
  cubes: [],
  removeCube: (x: number, y: number, z: number) => {
    set((prev) => ({
      cubes: prev.cubes.filter(cube => {
        const [X, Y, Z] = cube.pos
        return (X !== x || Y !== y || Z !== z)
      })
    }))
  },
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
  setTexture: (texture: string) => { 
    set(() => ({
      texture
    }))
  },
  saveWorld: () => { },
  resetWorld: () => { }
}))