'use client'
import { SidebarContext } from "@/contexts/SidebarMenu";
import { MenuIcon, Rocket } from "lucide-react";
import { useContextSelector } from "use-context-selector";

export function Header() {

  const {setIsOpen, isOpen} = useContextSelector(SidebarContext, (context) => {
     return {
      setIsOpen : context.changeIsOpenValue,
      isOpen : context.isOpen
    }
  })
  function handleChangeIsOpen(){
    setIsOpen(isOpen)
  }
  return (
    <header className="flex justify-between items-center  p-1  w-full bg-transparent shadow-md ">
      <button className="bg-transparent border-none p-1 rounded-md dark:hover:bg-zinc-800/80 hover:bg-zinc-200 duration-200 " onClick={handleChangeIsOpen}>
        <MenuIcon size={24}/>
      </button>

      <Rocket size={24}/>
    </header>
  )
}