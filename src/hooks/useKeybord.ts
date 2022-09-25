import { useCallback, useEffect, useState } from "react"
import { actionByKey } from "../utils/actionByKey"

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveFoward: false,
    moveBack: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  })

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((prev) => {
        return ({
          ...prev,
          [action]: true,
        })
      })
    }
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((prev) => {
        return ({
          ...prev,
          [action]: false
        })
      })
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("keyup", handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return actions
}