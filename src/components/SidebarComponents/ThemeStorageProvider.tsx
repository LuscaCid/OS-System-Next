'use client'
import { ReactNode, useState } from "react"
import { createContext } from "use-context-selector"

interface ContextProps {
  currentTheme : string | null
  setCurrentTheme : React.Dispatch<React.SetStateAction<string | null>>
}
interface ThemeStorageProviderProp {
  children : ReactNode
}
const ThemeContext = createContext({} as ContextProps)
export function ThemeStorageProvider({children} : ThemeStorageProviderProp) {

  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('@OS-theme'))

  return (
    <ThemeContext.Provider value={
      { 
        currentTheme,
        setCurrentTheme
      }
      }>
      {children}
    </ThemeContext.Provider>
  )
}