import { nanoid } from "nanoid";
import create from "zustand";

type Cube = {
  key: string;
  pos: [x: number, y: number, z: number];
  texture: string;
};

type Store = {
  texture: string;
  cubes: Cube[];
  removeCube: (x: number, y: number, z: number) => void;
  setTexture: (texture: string) => void;
  saveWorld: () => void;
  resetWorld: () => void;
  addCube: (x: number, y: number, z: number) => void;
};

const getLocalStorage = (key: string) =>
  JSON.parse(window.localStorage.getItem(key) as string);

const CUBES_LOCAL_STORAGE_KEY = "cubes:mine:craft:clone";

export const useStore = create<Store>((set) => ({
  texture: "dirt",
  cubes: getLocalStorage(CUBES_LOCAL_STORAGE_KEY) || [],
  removeCube: (x: number, y: number, z: number) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  addCube: (x: number, y: number, z: number) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  setTexture: (texture: string) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    // @ts-ignore
    set((prev) => {
      window.localStorage.setItem(
        CUBES_LOCAL_STORAGE_KEY,
        JSON.stringify(prev.cubes)
      );
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
