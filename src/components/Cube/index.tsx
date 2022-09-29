import { useBox } from "@react-three/cannon";
import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import { handleAddCubeToCube } from "../../utils/handleAddCubeToCube";
import * as textures from "../textures";

type Props = {
  position: [x: number, y: number, z: number];
  texture: string;
};

const Cube: React.FC<Props> = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  // @ts-ignore
  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        // @ts-ignore
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        // @ts-ignore
        if (e.shiftKey) {
          removeCube(x, y, z);
          return;
        }
        handleAddCubeToCube(clickedFace, addCube, x, y, z);
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        map={activeTexture}
        attach="material"
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
      />
    </mesh>
  );
};

export { Cube };
