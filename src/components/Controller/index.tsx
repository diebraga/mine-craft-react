import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Controller: React.FC = () => {
  return (
    <Flex
      w="150px"
      h="150px"
      bg="GrayText"
      bottom="10"
      left="10"
      position="absolute"
      borderRadius="full"
      opacity="0.7"
    >
      <Flex w="100%" h="100%" position="relative">
        <Button
          transform="translate(-50%,-50%)"
          top="7"
          left="50%"
          position="absolute"
          zIndex="1"
          onClick={() => alert('forward')}
        >
          {"↑"}
        </Button>
        <Button
          transform="translate(-50%,-50%)"
          bottom="-3"
          left="50%"
          position="absolute"
          onClick={() => alert('back')}
        >
          {"↓"}
        </Button>
        <Button
          transform="translate(-50%,-50%)"
          top="50%"
          left="7"
          position="absolute"
          onClick={() => alert('left')}
        >
          {"←"}
        </Button>
        <Button
          transform="translate(-50%,-50%)"
          top="50%"
          right="-4"
          position="absolute"
          onClick={() => alert('right')}
        >
          {"→"}
        </Button>
      </Flex>
    </Flex>
  );
};

export { Controller };
