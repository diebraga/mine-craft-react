import React, { useEffect, useState } from "react";
import { useKeyboard } from "../../hooks/useKeybord";
import { useStore } from "../../hooks/useStore";

const TextureSelector: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { glass, dirt, grass, log, wood } = useKeyboard();

  const textures = { glass, dirt, grass, log, wood };
  useEffect(() => {
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      console.log(pressedTexture[0]);
      setTexture(pressedTexture[0]);
    }
  }, [glass, dirt, grass, log, wood, setTexture, textures]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    setIsVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, []);

  return (
    <>{isVisible && <div className="textureSelector">Texture Selector</div>}</>
  );
};

export { TextureSelector };
