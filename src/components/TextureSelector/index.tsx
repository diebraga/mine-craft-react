import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useKeyboard } from "../../hooks/useKeyBoard";
import { useStore } from "../../hooks/useStore";
import dirtImage from "../../assets/dirt.jpeg";
import glassImage from "../../assets/glass.jpeg";
import grassImage from "../../assets/grass.jpeg";
import logImage from "../../assets/log.jpeg";
import woodImage from "../../assets/wood.jpeg";

const texturesImages = [
  { name: "dirt", src: dirtImage },
  { name: "glass", src: glassImage },
  { name: "grass", src: grassImage },
  { name: "log", src: logImage },
  { name: "wood", src: woodImage },
];

const TextureSelector: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  // console.log(activeTexture);
  const { glass, dirt, grass, log, wood } = useKeyboard();
  // console.log(activeTexture);
  const textures = { glass, dirt, grass, log, wood };
  useEffect(() => {
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [glass, dirt, grass, log, wood, setTexture]);

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
    <Flex
      flexDir="column"
      maxW="200px"
      bottom="10"
      left="10"
      position="absolute"
      cursor="pointer"
      bg="whiteAlpha.800"
      borderRadius="full"
      py="4"
      px="3"
      zIndex={1000}
    >
      {Object.entries(textures).map(([name, texture]) => {
        return (
          <Image
            key={name}
            src={texturesImages.find((item) => item.name === name)?.src}
            w="50px"
            h="50px"
            rounded="full"
            mb="2"
            border={activeTexture === name ? "4px solid red" : ""}
            cursor="pointer"
            onClick={() => setTexture(name)}
          />
        );
      })}
    </Flex>
  );
};

export { TextureSelector };
