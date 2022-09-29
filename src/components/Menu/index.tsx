import React from "react";
import { useStore } from "../../hooks/useStore";

const Menu: React.FC = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  const onSave = () => saveWorld();
  const onReset = () => resetWorld();
  
  return <div />;
};

export { Menu };
