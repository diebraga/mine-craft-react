import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FirstPersonView } from "./components/FirstPersonView";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";
import { Box } from "@chakra-ui/react";
import { Controller } from "./components/Controller";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intenity={0.5} />
        <FirstPersonView />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <Box
        transform="translate(-50%,-50%)"
        top="50%"
        left="50%"
        position="absolute"
      >
        +
      </Box>
      <Menu />
      <TextureSelector />
      <Controller />
    </>
  );
}

export default App;
