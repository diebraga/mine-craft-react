import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FirstPersonView } from "./components/FirstPersonView";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";

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
      <div className="cursor">+</div>
      <TextureSelector />
    </>
  );
}

export default App;
