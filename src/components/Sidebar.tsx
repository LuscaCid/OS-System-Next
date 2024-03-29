'use client'
import { ChevronsUpDown, User, Home as HomeIcon, UsersRound, Settings2 } from "lucide-react";
import { LiLink } from "../app/components/SidebarComponents/LiLink";
import { ChangeTheme } from "../app/components/SidebarComponents/ThemeMode";
import { useContextSelector } from "use-context-selector";
import { SidebarContext } from "@/contexts/SidebarMenu";

export function Sidebar () {
    const isOpen = useContextSelector(SidebarContext, (context) => {
        return context.isOpen
    })

    return (

        <aside className={`fixed  rounded-md opacity-0 ease-in-out  h-full z-10 bg-zinc-200 items-start overflow-hidden p-2 transition-all duration-200 w-36 border-r border-zinc-300 dark:bg-zinc-900 dark:border-zinc-800 ${isOpen ? `translate-x-0 opacity-100` : `-translate-x-36`}`}>
            
            <div className="rounded-md border border-zinc-300 no dark:border-zinc-800 p-2 flex gap-1 hover:bg-zinc-300 dark:hover:bg-zinc-800 transition duration-200 cursor-pointer mb-2 items-center  text-nowrap overflow-x-hidden" >
                <User  size={15}/>Lucas Cid <ChevronsUpDown size={15} />
            </div>
            <nav className="list-none flex flex-col gap-2">
                <LiLink 
                    icon={HomeIcon}
                    source="/" 
                    title="home" 
                />
                <LiLink 
                    icon={UsersRound}
                    source="/costumers" 
                    title="costumers"
                />
                <LiLink 
                    source="/" 
                    icon={Settings2}
                    title="settings" 
                />
                <ChangeTheme />
            </nav>
        </aside>
    )
}