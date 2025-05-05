import { useState } from "react";

type UseToggleType = [ boolean, () => void ]

export const useToggle = (): UseToggleType => {
  const [ isToggle, setIsToggle ] = useState(false)

  const toggle = () => {
    setIsToggle(( prevState ) => !prevState)
  }

  return [ isToggle, toggle ]
}