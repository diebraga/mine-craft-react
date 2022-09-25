export const actionByKey = (key: any) => {
  const keyActionMap: any = {
    KeyW: "moveFoward",
    KeyS: "moveBack",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
  }
  return keyActionMap[key]
}
