'use client'
import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";

interface SidebarContextProps {
  isOpen : boolean;
  changeIsOpenValue : () => void 
}

interface FunctionProviderProps {
  children : ReactNode;
}

export const SidebarContext = createContext({} as SidebarContextProps)

export function SideBarContextProvider ({children} : FunctionProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  
  function changeIsOpenValue(){
    setIsOpen(!isOpen)
  }
  return (
    <SidebarContext.Provider value={{
      isOpen,
      changeIsOpenValue
    }}>
      {children}
    </SidebarContext.Provider>
  )
}