export const actionByKey = (key: any) => {
  const keyActionMap: any = {
    KeyW: "moveForward",
    KeyS: "moveBack",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
    ArrowUp: "moveForward",
    ArrowDown: "moveBack",
    ArrowLeft: "moveLeft",
    ArrowRight: "moveRight",
  }
  return keyActionMap[key]
}
